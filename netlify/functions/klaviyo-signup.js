const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Parse the request body and log it for debugging
    const payload = JSON.parse(event.body);
    console.log('Incoming Payload:', payload);

    // Try to get the email from different possible structures
    const email = payload.email || payload['newsletter-signup--footer']?.email || payload['newsletter-signup--popup']?.email || payload.payload?.data?.email;

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
    const response = await fetch('https://a.klaviyo.com/api/lists/Tac5wN/relationships/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
        'revision': '2024-07-15',
      },
      body: JSON.stringify(klaviyoPayload),
    });

    if (!response.ok) {
      throw new Error(`Failed to add profile to Klaviyo: ${response.statusText}`);
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
