const express = require('express');
const connectDB = require('./config/db'); // MongoDB connection
const crmRoutes = require('./routes/crmRoutes');
const marketingRoutes = require('./routes/marketingRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/crm', crmRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to EzyMetrics API');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
