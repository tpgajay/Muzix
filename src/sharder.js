const { ClusterManager } = require("discord-hybrid-sharding");
const config = require("../src/settings/config.js");
require("dotenv").config();

const manager = new ClusterManager(`${__dirname}/index.js`, {
    totalShards: "auto",
    shardsPerClusters: 5,
    totalClusters: "auto",
    mode: "process",
    TOKEN: ""
});

manager.on("clusterCreate", (cluster) => console.log(`[INFO] Bot Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });
