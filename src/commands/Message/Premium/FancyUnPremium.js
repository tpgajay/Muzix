const { EmbedBuilder } = require("discord.js");
const User = require("../../../settings/models/User.js");

module.exports = {
    name: "unpremium",
    description: "Delete user premium.",
    category: "Premium",
    aliases: ["premiumdelete"],
    owner: true,
    run: async (client, message, args) => {
        let id = args[0];

        if (!id) return message.reply({ content: "<a:crosss:1210629485309730907> | Please provide a user ID." });

        let REGEX = new RegExp(/^[0-9]+$/);

        if (!REGEX.test(id)) {
            const embed = new EmbedBuilder().setDescription(`<a:crosss:1210629485309730907> | The ID must be a number.`).setColor(client.color);

            return message.reply({ embeds: [embed] });
        }

        const user = client.premium.get(id);

        if (!user) {
            const embed = new EmbedBuilder()
                .setDescription(`\<a:crosss:1210629485309730907> | \`${id}\` is not a premium user or not in my database.`)
                .setColor(client.color);

            return message.reply({ embeds: [embed] });
        }

        const userData = await User.findOne({ Id: id });

        if (userData.isPremium === true) {
            userData.isPremium = false;
            userData.premium.redeemedBy = [];
            userData.premium.redeemedAt = null;
            userData.premium.expiresAt = null;
            userData.premium.plan = null;

            const newUser = await userData.save();
            client.premium.set(userData.Id, newUser);

            const embed = new EmbedBuilder()
                .setDescription(`\<a:check:1210630091441180783>\ | You've successfully remove \`${id}\` premium status.`)
                .setColor(client.color);

            return message.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setDescription(`\<a:crosss:1210629485309730907>\ | \`${id}\` premium status already removed or not a premium user.`)
                .setColor(client.color);

            return message.reply({ embeds: [embed] });
        }
    },
};
