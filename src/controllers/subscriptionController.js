const Subscription = require('../models/Subscription');
const Plan = require('../models/Plan');

exports.createSubscription = async (req, res) => {
  try {
    const { planId } = req.body;
    const userId = req.user.id;

    const plan = await Plan.findById(planId);
    if (!plan) return res.status(404).json({ error: 'Plan not found' });

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + plan.duration);

    const subscription = await Subscription.create({
      userId,
      planId,
      status: 'ACTIVE',
      startDate: new Date(),
      endDate
    });

    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    if (req.user.id !== userId) return res.status(403).json({ error: 'Access denied' });

    const sub = await Subscription.findOne({ userId }).populate('planId');
    if (!sub) return res.status(404).json({ error: 'No subscription found' });

    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newPlanId } = req.body;
    if (req.user.id !== userId) return res.status(403).json({ error: 'Access denied' });

    const plan = await Plan.findById(newPlanId);
    if (!plan) return res.status(404).json({ error: 'Plan not found' });

    const sub = await Subscription.findOne({ userId });
    if (!sub) return res.status(404).json({ error: 'Subscription not found' });

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + plan.duration);

    sub.planId = newPlanId;
    sub.startDate = new Date();
    sub.endDate = endDate;
    sub.status = 'ACTIVE';

    await sub.save();
    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    if (req.user.id !== userId) return res.status(403).json({ error: 'Access denied' });

    const sub = await Subscription.findOne({ userId });
    if (!sub) return res.status(404).json({ error: 'Subscription not found' });

    sub.status = 'CANCELLED';
    sub.endDate = new Date();
    await sub.save();

    res.json({ message: 'Subscription cancelled' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
