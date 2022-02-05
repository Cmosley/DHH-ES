const accountSid = process.env.TWILIO_ACC_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Node",
    to: "+18179290248", // Text this number
    from: "+18179936527", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
