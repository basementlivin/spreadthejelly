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

    // Create the Klaviyo request payload
    const klaviyoPayload = {
      data: [
        {
          type: 'profile',
          id: email,
        },
      ],
    };

    // Send the request to Klaviyo
    const response = await fetch('https://a.klaviyo.com/api/lists/Tac5wN/relationships/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.KLAVIYO_API_KEY}`,
        'revision': '2024-07-15',
      },
      body: JSON.stringify(klaviyoPayload),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Retrieve the error message from the response
      throw new Error(`Failed to add profile to Klaviyo: ${response.statusText} - ${errorText}`);
    }

    return {
      statusCode: 200,
      body: 'Profile added to Klaviyo successfully',
    };
  } catch (error) {
    console.error('Error:', error.message);
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
