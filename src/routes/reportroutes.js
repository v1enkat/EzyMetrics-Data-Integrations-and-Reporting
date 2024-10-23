const express = require('express');
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');
const runETLProcess = require('../utils/etl');

const router = express.Router();

router.get('/report/csv', async (req, res) => {
  const metrics = await runETLProcess();
  const fields = ['campaignName', 'totalLeads', 'totalSpend', 'efficiency'];
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(metrics);

  res.header('Content-Type', 'text/csv');
  res.attachment('report.csv');
  res.send(csv);
});

router.get('/report/pdf', async (req, res) => {
  const metrics = await runETLProcess();
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res);

  doc.fontSize(16).text('Campaign Metrics Report', { align: 'center' });
  metrics.forEach((metric) => {
    doc.text(
      `Campaign: ${metric.campaignName}, Leads: ${metric.totalLeads}, Spend: ${metric.totalSpend}, Efficiency: ${metric.efficiency}`
    );
  });

  doc.end();
});

module.exports = router;
