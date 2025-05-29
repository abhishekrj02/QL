require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const cron = require('node-cron');
const expireSubscriptions = require('./jobs/subscriptionExpiryJob');
const PORT = process.env.PORT || 3000;

connectDB().then(async() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    cron.schedule('0 0 * * *', async () => {
      console.log('Running subscription expiry check...');
      await expireSubscriptions();
    });
  });
});
