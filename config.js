const config = {
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database',
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development'
  };
  
  module.exports = config;