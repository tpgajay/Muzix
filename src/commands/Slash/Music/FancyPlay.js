const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const formatDuration = require("../../../structures/FormatDuration.js");

module.exports = {
    name: "play",
    description: "Play your favorite song/s.",
    category: "Music",
    options: [
        {
            name: "query",
            description: "Provide song name/url.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
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
        const song = interaction.options.getString("query");

        let player = client.poru.players.get(interaction.guild.id);

        if (player && interaction.member.voice.channelId !== interaction.guild.members.me.voice.channelId) {
            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`\<a:crosss:1210629485309730907>\ | You must be on the same voice channel as mine to use this command.`)
                .setTimestamp();

            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        await interaction.deferReply({ ephemeral: false });

        // This will force the playSource config to be set as 'spotify' if the config.js or .env file has 'disableYouTube' set to 'true' and the playSource value you set in the config.js is one of the constants in the 'youtube' array below.
        let source = client.config.playSource;

        const youtube = ["youtube", "youtube_music", "ytsearch", "ytmsearch", "youtubemusic", "youtube music"];

        if (client.config.disableYouTube === true && youtube.includes(source)) source = "spotify";
