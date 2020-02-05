const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

  waiting = await message.channel.send("JE CHERCHE").catch(console.error);

  var pingEmbed = new Discord.RichEmbed()
    .setAuthor("Latence du bot & de l'api", bot.user.avatarURL)
    .setColor("#00F7FF")
    .addField(
      "**🤖 INFINITY BOT :**",
      "> `" + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms`",
      true
    )
    .addField("**API :**", "> `" + Math.round(bot.ping) + "ms`", true)
    .setTimestamp(message.createdAt)
    .setFooter('Créer par adrien dt#1553', 'https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048');
  waiting.edit(pingEmbed).catch(console.error);
};
module.exports.help = {
  name: "ping"
};
