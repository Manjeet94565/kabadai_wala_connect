const environment = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  AI_SERVICE_URL: process.env.AI_SERVICE_URL,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  DB_SSL: process.env.DB_SSL || 'false',
};

Object.entries(environment).forEach(([key, value]) => {
  if (!value && key !== 'PORT') console.warn(`Warning: ${key} is not configured.`);
});

module.exports = environment;
