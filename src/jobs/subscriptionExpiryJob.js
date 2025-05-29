const Subscription = require('../models/Subscription');

const checkExpiredSubscriptions = async () => {
  try {
    const now = new Date();

    const expiredSubs = await Subscription.find({
      status: 'ACTIVE',
      endDate: { $lt: now }
    });

    for (const sub of expiredSubs) {
      sub.status = 'EXPIRED';
      await sub.save();
    }

    if (expiredSubs.length > 0) {
      console.log(`⏰ Expired ${expiredSubs.length} subscriptions.`);
    }
  } catch (err) {
    console.error('Error expiring subscriptions:', err.message);
  }
};

module.exports = checkExpiredSubscriptions;
