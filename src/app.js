const express = require('express');
const crmRoutes = require('./routes/crmroutes');
const marketingRoutes = require('./routes/marketingroute');

const app = express();

app.use(express.json());

app.use('/api/crm', crmRoutes);

app.use('/api/marketing', marketingRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to EzyMetrics API Service');
});

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});