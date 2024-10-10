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

    let profileId = null;

    // Step 1: Search for the profile by email
    const searchProfileResponse = await fetch(`https://a.klaviyo.com/api/profiles/?filter=equals(email,'${email}')`, {
      method: 'GET',
      headers: {
        'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
        'revision': '2024-07-15',
      },
    });

    if (searchProfileResponse.ok) {
      const searchResult = await searchProfileResponse.json();
      if (searchResult.data && searchResult.data.length > 0) {
        profileId = searchResult.data[0].id;
        console.log('Profile found with ID:', profileId);
      }
    }

    // Step 2: Create the profile if it doesn't already exist
    if (!profileId) {
      const createProfilePayload = {
        data: {
          type: 'profile',
          attributes: {
            email: email,
            properties: {
              signupSource: 'Website'
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

      const createdProfile = await createProfileResponse.json();
      profileId = createdProfile.data.id;
      console.log('Profile created successfully with ID:', profileId);
    }

    // Step 3: Add the profile to the list
    const listId = 'Tac5wN';
    const addToListPayload = {
      data: [
        {
          type: 'profile',
          id: profileId
        }
      ]
    };

    const addToListResponse = await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
        'revision': '2024-07-15',
      },
      body: JSON.stringify(addToListPayload),
    });

    if (!addToListResponse.ok) {
      const errorText = await addToListResponse.text();
      throw new Error(`Failed to add profile to Klaviyo list: ${addToListResponse.statusText} - ${errorText}`);
    }

    // Log success message if the profile was added to the list
    console.log(`Profile with ID ${profileId} and email ${email} successfully added to the list ${listId}`);

    return {
      statusCode: 200,
      body: 'Profile created (or already existed) and added to the Klaviyo list successfully',
    };
  } catch (error) {
    console.error('Error:', error.message);
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
