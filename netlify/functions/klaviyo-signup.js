const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { email } = JSON.parse(event.body).payload.data;

  const klaviyoPayload = {
    data: [
      {
        type: 'profile',
        id: email,
      },
    ],
  };

  try {
    const response = await fetch('https://a.klaviyo.com/api/lists/Tac5wN/relationships/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.KLAVIYO_API_KEY}`,
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
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
