const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "owner-help",
  description: "Display all commands for the owner.",
  category: "Developer",
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
    owner: true,
    premium: false,
  },
  run: async (client, interaction) => {
    // Defer the interaction to prevent timeouts
    await interaction.deferReply({ ephemeral: false });

    // Define premium and developer commands for better readability
    const premiumCommands = [
      "M!generate : Generate premium user code.",
      "M!unpremium : Delete user from premium.",
      "M!list : Get list of all premium users.",
    ].join("\n");

    const developerCommands = [
      "M!ban : Ban a user from using the bot.",
      "M!maintenance : Enable maintenance mode.",
      "M!eval : Bot evaluation.",
    ].join("\n");

    // Build the embed with a more professional and organized structure
    const embed = new EmbedBuilder()
      .setTitle("Owner Commands")
      .setDescription(`
        <:emoji_24:1210633582905655296> **Premium Commands**
        \`\`\`yaml
        ${premiumCommands}
        \`\`\`

        <a:Developer:1210633774086488155> **Developer Commands**
        \`\`\`yaml
        ${developerCommands}
        \`\`\`
      `)
      .setColor(client.color)
      .setURL("https://discord.com/invite/ByeTFze94A"); // Replace with your actual support server URL

    // Send the edited reply with the embed
    return interaction.editReply({ embeds: [embed] });
  },
};
