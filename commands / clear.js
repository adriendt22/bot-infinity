const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Tu n'as pas les permissions");
  if (!args[0])
    return message.reply(
      "syntaxe: .clear <entrer le nombre de message a supprimer"
    );

  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`j'ai supprimé ***${args[0]} messages*** pour vous !`)
      .then(msg => msg.delete(5000));
  });
};

module.exports.help = {
  name: "clear"
};
