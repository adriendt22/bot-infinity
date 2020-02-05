const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let waiting = await message.channel
    .send("<a:load:520658910072274944>")
    .catch(console.error);
  let mentionedUser = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()
    .setColor("#F7FF00")
    .setTitle("🆘 ***HELP***  🆘")
    .setThumbnail("https://i.imgur.com/u8LAFbO.png")
    .addField(
      "***.ano :***",
      "💬 Pour faire un message anonyme dans #【😈】dark-chat"
    )
    .addField("***.twt :***", "💬 Pour faire un tweet dans #【📳】twitter-rp ")
    .addField(
      ".insta",
      "💬 Pour poster une image sur instagram (mettre le lien de la photo)"
    )
    .addField("***IP :***", "💣 134.255.252.97:3306")
    .addField("***.ping :***", "📋 ***Pour voir la latence du bot***")
    .addField("***.inv***", "***📋 Pour avoir le lien d'invitation discord***")
    .addField("***.mod***", "📝 ***Pour les commandes modo/admin/fonda***")
    .setFooter(
      "Créer par adrien dt#1553",
      "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
    )
    .setDescription("📝 Liste des commandes");

  message.delete();

  waiting.edit(avatarembed).catch(console.error);
};

module.exports.help = {
  name: "help"
};
