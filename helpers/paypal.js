const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASat0UgoaUVZcqJMwh1Lelqazu64mlhzHtF5O1c2Yf3DHOfk_EKVEul1QkaLpc9lMxQPrvvAYUSFMIHf",
  client_secret: "EF8zT4c1XcUwLjGWmE3nItssbY2NvO2Pweyn3Gja3yZK87z3v8yJFo3yJZMyCe2TFmHpJ9ipOh7d2V6O",
});

module.exports = paypal;