const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/subscriptionController');

router.post('/', auth, controller.createSubscription);
router.get('/:userId', auth, controller.getSubscription);
router.put('/:userId', auth, controller.updateSubscription);
router.delete('/:userId', auth, controller.cancelSubscription);

module.exports = router;
