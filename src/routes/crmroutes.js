const express = require('express');
const router = express.Router();
const Lead = require('../models/leadModel');
const leads = require('../data/crmdata');


router.get('/leads', async (req, res) => {
  try {
    await Lead.insertMany(leads);
    res.status(200).json({ message: 'Leads data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
