const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaignModel');
const campaigns = require('../data/marketingdata');


router.get('/campaigns', async (req, res) => {
  try {
    await Campaign.insertMany(campaigns);
    res.status(200).json({ message: 'Campaigns data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
