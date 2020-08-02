import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
    if (response.status >= 400) {
      const text = await response.text();
      const responseData = JSON.parse(text);
      const { title, detail } = responseData;
      const description = detail.split('Use')[0];
      return res.status(400).json({
        error: {
          title,
          description,
        },
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
