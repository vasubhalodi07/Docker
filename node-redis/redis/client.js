const { Redis } = require("ioredis");

const redisHost = process.env.REDIS_HOST || "redis-stack";
const redisPort = process.env.REDIS_PORT || 6379;

const client = new Redis({ host: redisHost, port: redisPort });

module.exports = client;
