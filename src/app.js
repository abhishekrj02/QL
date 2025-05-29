const express = require('express');
const planRoutes = require('./routes/planRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes); // <-- Add this line
app.use('/api/plans', planRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

app.use(errorHandler);
module.exports = app;
