const { ClusterManager } = require("discord-hybrid-sharding");
const config = require('opt/render/project/src/settings/config.js');

const manager = new ClusterManager(`${__dirname}/index.js`, {
    totalShards: "auto",
    shardsPerClusters: 5,
    totalClusters: "auto",
    mode: "process",
    token: process.env.TOKEN || config.token, // <=== PASTE YOU TOKEN BOT HERE
});

manager.on("clusterCreate", (cluster) => console.log(`[INFO] Bot Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });
