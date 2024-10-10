const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Parse the request body as JSON
    const payload = JSON.parse(event.body);
    console.log('Incoming Payload:', payload);

    // Try to find the email in various possible locations
    const email =
      payload.email ||
      payload.data?.email ||
      payload.human_fields?.Email ||
      payload.ordered_human_fields?.find(field => field.name === 'email')?.value;

    if (!email) {
      throw new Error('Email not found in the request payload');
    }

    // Step 1: Create a profile in Klaviyo
    const createProfilePayload = {
      data: {
        type: 'profile',
        attributes: {
          email: email,
          properties: {
            signupSource: 'Website footer'
          }
        }
      }
    };

    const createProfileResponse = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
        'revision': '2024-07-15',
      },
      body: JSON.stringify(createProfilePayload),
    });

    if (!createProfileResponse.ok) {
      const errorText = await createProfileResponse.text();
      throw new Error(`Failed to create profile in Klaviyo: ${createProfileResponse.statusText} - ${errorText}`);
    }

    console.log('Profile created successfully:', email);

    // Step 2: Subscribe the profile to a list
    const subscribePayload = {
      profiles: [
        {
          email: email
        }
      ]
    };

    const subscribeResponse = await fetch('https://a.klaviyo.com/api/v2/list/Tac5wN/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify(subscribePayload),
    });

    if (!subscribeResponse.ok) {
      const errorText = await subscribeResponse.text();
      throw new Error(`Failed to subscribe profile to Klaviyo list: ${subscribeResponse.statusText} - ${errorText}`);
    }

    return {
      statusCode: 200,
      body: 'Profile created and subscribed to Klaviyo successfully',
    };
  } catch (error) {
    console.error('Error:', error.message);
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
