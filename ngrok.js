const ngrok = require("ngrok");
const { config } = require("dotenv");
config();

(async function () {
  if (process.env.NGROK_ACTIVE) {
    try {
      const ngrokListen = await ngrok.connect(
        process.env.NGROK_AUTH
          ? {
              name: "linvo",
              proto: "http", // http|tcp|tls, defaults to http
              addr: 3000, // port or network address, defaults to 80
              hostname: process.env.NGROK_SUBDOMAIN, // reserved tunnel name https://alex.ngrok.io
              authtoken: process.env.NGROK_AUTH, // your authtoken from ngrok.com
              region: process.env.NGROK_REGION, // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
            }
          : process.env.NGROK_SUBDOMAIN
          ? { addr: 3000, subdomain: process.env.NGROK_SUBDOMAIN }
          : {}
      );

      console.log("LISTENING ON " + ngrokListen);
    } catch (err) {
      console.log(err);
    }
  }
})();
