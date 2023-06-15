const tunnelmole = require('tunnelmole/cjs');
const { config } = require("dotenv");
config();

const { TUNNELMOLE_DOMAIN, TUNNELMOLE_ACTIVE } = process.env;

if (TUNNELMOLE_ACTIVE) {
    const options = {
        port: 3000,
    };

    if (TUNNELMOLE_DOMAIN) {
        options.domain = TUNNELMOLE_DOMAIN;
    }

    tunnelmole(options);
}