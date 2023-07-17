const express = require('express');
const axios = require('axios');
const app = express();

app.get('/reviews', async (req, res) => {
    const API_KEY = "AIzaSyDjDIpq59r_DhnP8i0j0smRjcK2YT1lw50";
    const PLACE_ID = "ChIJ3bnj5l-RyzsRNMPDRJHmqTc"
  try {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${API_KEY}`,
    );

    console.log(response.data);
    //res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Error fetching reviews' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
