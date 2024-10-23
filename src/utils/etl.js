const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');

const runETLProcess = async () => {
  try {
   
    const campaigns = await Campaign.find();
    const leads = await Lead.find();

   
    const campaignMetrics = campaigns.map((campaign) => {
      const totalLeads = leads.filter((lead) => lead.source === campaign.platform).length;
      const efficiency = (totalLeads / campaign.spend).toFixed(2);
      return {
        campaignName: campaign.name,
        totalLeads,
        totalSpend: campaign.spend,
        efficiency,
      };
    });

    console.log('ETL Process Complete', campaignMetrics);
    
    return campaignMetrics;
  } catch (error) {
    console.error('ETL Process Failed', error);
  }
};

if (efficiency < 1) {
    await sendAlertEmail('Campaign Alert', `Efficiency for ${campaign.name} is below threshold.`);
  }
  
module.exports = runETLProcess;
