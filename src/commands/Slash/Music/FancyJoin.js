const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "join",
    description: "Invite bot to your voice channel.",
    category: "Music",
    permissions: {
        bot: ["Speak", "Connect"],
        channel: ["Speak", "Connect"],
        user: [],
    },
    settings: {
        inVc: true,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        let player = client.poru.players.get(interaction.guild.id);

        if (player) {
            const embed = new EmbedBuilder().setColor(client.color).setDescription(`\ <a:crosss:1210629485309730907>\ | I already joined a voice channel.`);

            return interaction.editReply({ embeds: [embed] });
        }

        if (!player) {
            player = await client.poru.createConnection({
                guildId: interaction.guild.id,
                voiceChannel: interaction.member.voice.channel.id,
                textChannel: interaction.channel.id,
                region: interaction.member.voice.channel.rtcRegion || undefined,
                deaf: true,
            });

            await player.connect();

            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`<a:check:1210630091441180783>| Joined to ${interaction.member.voice.channel.toString()}`);

            return interaction.editReply({ embeds: [embed] });
        }
    },
};
