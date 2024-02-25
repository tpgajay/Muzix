const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Send a ping request.",
    category: "Information",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const embed = new EmbedBuilder().setDescription(`<:stats:1210778658596196352>  ${client.user.username} Network Ping!\n<a:dots:1210785677848092722> **API Latency:** __${Math.round(client.ws.ping)}ms__\n<a:dots:1210785677848092722> **Websocket Latency:** __${Math.round(client.ws.ping)}__`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
