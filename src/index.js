const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Muzix Tho Mamuluga Undadu!')
});
app.listen(3000, () => {
  console.log('[INFO] Bot Online!');
});
const MainClient = require("./fancy.js");
const client = new MainClient();

client.connect();

module.exports = client;

/**
 * @INFO
 * Bot Coded by itz.frosty.owner | https://discord.com/invite/ByeTFze94A
 * @INFO
 */
