const fetch = require('node-fetch');
const querystring = require('querystring');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Parse the URL-encoded request body
    const payload = querystring.parse(event.body);
    console.log('Incoming Payload:', payload);

    const email = payload.email;

    if (!email) {
      throw new Error('Email not found in the request payload');
    }

    const klaviyoPayload = {
      data: [
        {
          type: 'profile',
          id: email,
        },
      ],
    };

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
