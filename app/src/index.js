const { DateTime } = require("luxon");

const now = DateTime.local();
console.log(now.toString());
