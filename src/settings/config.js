require("dotenv").config();

module.exports = {

  TOKEN: "", // <==== PASTE YOU TOKEN
  prefix: process.env.PREFIX || "M!", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
  color: process.env.EMBED_COLOR || "#f308e3", // <==== YOU EMBEDED HEX COLOR
  owner: process.env.OWNER_ID || "const mySecret = process.env['OWNER_ID']", // <==== BOTS OWNER ID
  guildLogs: process.env.GUILD_LOGS || "const mySecret = process.env['GUILD_LOGS']", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
  leaveTimeout: process.env.LEAVE_TIMEOUT || "20000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
  disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

  // ⬇⬇⬇ PORU DETAILS
  playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
  poruOptions: {
    defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
    clientID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8", // <==== SPOTIFY CLIENT ID
    clientSecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81", // <==== SPOTIFY CLIENT SECRET
    reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
    playlistLimit: 2, // <==== 1 = 100 TRACKS
    albumLimit: 2, // <==== 1 = 50 TRACKS
    artistLimit: 2, // <==== 1 = 50 TRACKS
    searchMarket: "us",
  },
  nodes: [
    {
      name: process.env.NODE_NAME1 || "Main", 
      host: process.env.NODE_HOST1 || "lava.link", 
      port: parseInt(process.env.NODE_PORT1 || "80"), 
      password: process.env.NODE_PASSWORD1 || "LAVA", 
      secure: parseBoolean(process.env.NODE_SECURE1 || "false"),
      regions: process.env.NODE_REGIONS1 || ["singapore"], 
    }
  ],


  mongoUri: process.env.MONGO_URI || "mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority", 
  supportUrl: process.env.SUPPORT_URL || "https://discord.com/invite/ByeTFze94A", 
  voteUrl: process.env.VOTE_URL || "https://discord.com/invite/ByeTFze94A",
  inviteUrl: process.env.INVITE_URL || "https://discord.com/oauth2/authorize?client_id=1210606381950836736&scope=bot%20applications.commands&permissions=2146958847", 
  imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/attachments/1210617159894433932/1210618271808618616/Picsart_24-02-23_21-34-27-269.jpg?ex=65eb3720&is=65d8c220&hm=a1eb4e507bff13b9710556bfca3c5b8c4a8c1c2d264917653c246ab6681b3a50&",
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
