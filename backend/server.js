const express = require("express");
const webpush = require("web-push");

const app = express();
const port = 3000;

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dC8C-WBbRkA:APA91bFmcDRwqLKR1CGDIowtZrUJou4ghxg9qmcXnC2LH975jd48uKQmvXv7sJXMnsPyv--6e4REn7Sh08qMat4Kjw3NX-B-JQX7Vf8SweQV_htNfu7eO2jRYGY9tK7e1QhMLXcZlxTY",
  expirationTime: null,
  keys: {
    p256dh:
      "BNf14K86PYtH_dtHTyvZxK5yHawR7_Cp996NbtBC8X0aA-lJ7ojytmuNbQpzCtx0yEWj6SpvEe_9aqFp7XjhY54",
    auth: "UvjV9BFFnHs3Iuof9Je6UQ",
  },
};

app.get("/send", (req, res) => {
  const message = req.query.message || "";
  console.log(message);
  webpush.setVapidDetails(
    "mailto:barathkumar.b2411@example.com",
    "BKaG1ILddP_8R9fhH7nd2gtZ3aFCrSzVWs3ELZV6yB-wLotRHX5WCXsDFIp60B7_uVkA_fm1yKZqBhyHrBeOR1Q",
    "dK8WoxvPwdq5RbZC9ASgNsw1RiYDKZgVC5EsGUcLOQA"
  );

  webpush.sendNotification(
    pushSubscription,
    JSON.stringify({ message })
  );

  res.end("Sending message: " + message);
});

app.listen(port, () => {
  console.log(`web-push-server listening on port ${port}`);
});
