const express = require("express");
const router = express.Router();
const redis = require("redis");
const client = redis.createClient({ host: "redis" });

router.get("/cache-test", async (req, res) => {
  await client.connect();
  await client.set("message", "Hello from Redis!");
  const message = await client.get("message");
  await client.disconnect();
  res.json({ message });
});

module.exports = router;
