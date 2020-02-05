const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Je ne trouve pas les commandes");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} chargée!`);
    bot.commands.set(props.help.name, props);
  });

  fs.readdir("./events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach(f => {
      const events = require(`./events/${f}`);
      const event = f.split(".")[0];

      client.on(event, events.bind(null, client));
    });
  });
});

bot.on("ready", () => {
  console.log(bot.user.username + " est en ligne !");
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(".")) return;
  if (message.channel.type === "dm") return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;

  let commandfile = bot.commands.get(command.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.on("guildMemberAdd", user => {
  let joinEmbed = new Discord.RichEmbed()
    .setColor("#570792")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(
      "Bienvenue " +
        user +
        " sur le serveur " +
        user.guild.name +
        " en espérant que la ville te plaise !"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
    )
    .setFooter(
      "Créer par adrien dt#1553",
      "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
    );
  user.guild.channels.get("625447028805074976").send(joinEmbed);
});

bot.on("guildMemberRemove", user => {
  let leaveEmbed = new Discord.RichEmbed()
    .setColor("#570792")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(
      "Au revoir " + user + " il y a l'air que tu n'as pas aimé la ville :cry: "
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
    )
    .setFooter(
      "Créer par adrien dt#1553",
      "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
    );
  user.guild.channels.get("625447028805074976").send(leaveEmbed);
});

bot.on("message", msg => {
  if (msg.channel.id == 614136569749700629) {
    if (msg.author.id == 671732679762378762) return;
    if (msg.deletable) msg.delete();
    let args = msg.content.split(" ").join(" ");
    let membre = msg.member.displayName;
    let authorr = msg.author;
    let ano = new Discord.RichEmbed()
      .setAuthor(
        "DarkChat",
        "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
      )
      .setColor("#000000")
      .setDescription("Nouveau message Anonyme : \n" + args)
      .setThumbnail("https://i.imgur.com/sh5MnZn.jpg")
      .setTimestamp()
      .setFooter(
        "Créer par adrien dt#1553",
        "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
      );
    msg.channel.send(ano);

    let verif_logs = new Discord.RichEmbed()
      .setAuthor(
        "DarkChat Logs",
        "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
      )
      .setFooter(
        "Créer par adrien dt#1553",
        "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
      )
      .setTitle("Message de la part de " + membre)
      .setDescription("Le message anonyme : " + args)
      .addField("ID du Membre", authorr.id);
    bot.channels.get("671781601801142292").send(verif_logs);
  }
});

bot.on("message", msg => {
  if (msg.channel.id == 614136567002431507) {
    if (msg.author.id == 671732679762378762) return;
    if (msg.deletable) msg.delete();
    let args = msg.content.split(" ").join(" ");
    let membre = msg.member.displayName;
    let authorr = msg.author;
    let twitter = new Discord.RichEmbed()
      .setAuthor(
        membre,
        "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
      )
      .setColor("#32b2f0")
      .setDescription(args)
      .setThumbnail("https://i.imgur.com/EG3aoly.png")
      .setTimestamp()
      .setFooter(
        "Créer par adrien dt#1553",
        "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
      );
    msg.channel.send({ embed: twitter }).then(embedMessage => {
      embedMessage.react("💙");
      embedMessage.react("🔁");
    });
  }
});

bot.on("message", msg => {
  if (msg.channel.id == 671781812476969011) {
    if (msg.author.id == 671732679762378762) return;
    if (msg.deletable) msg.delete();
    let args = msg.content.split(" ").join(" ");
    let membre = msg.member.displayName;
    let authorr = msg.author;
    let insta = new Discord.RichEmbed()
      .setAuthor(
        membre,
        "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
      )
      .setColor("#E600FF")
      .setImage(args)
      .setThumbnail("https://i.imgur.com/FNAl6vf.png")
      .setTimestamp()
      .setFooter(
        "Créer par adrien dt#1553",
        "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
      );
    msg.channel.send({ embed: insta }).then(embedMessage => {
      embedMessage.react("❤️");
    });
  }
});

bot.on("message", msg => {
  if (msg.channel.id == 671781946375798805) {
    if (msg.author.id == 671732679762378762) return;
    if (msg.deletable) msg.delete();
    let bourse = new Discord.RichEmbed()
      .setColor("#00FF33")
      .setTitle("***BOURSE***")
      .setThumbnail("https://i.imgur.com/rC54Vc1.jpg")
      .setDescription("📈***DISPO***📉")
      .addField(
        "⛏️ Mineur :",
        "Vente de 1 unité = Bronze : 5 € / Argent : 9 € / Or : 25 € / Diamant :  250 €      (+ 0%)"
      )
      .addField("🧵 Couturier :", "Vente de 1 unité = 40 €           (+ 0%)")
      .addField("🪓 Bûcheron :", "Vente de 1 unité = 13 €           (+ 0%)")
      .addField("🔪 Abatter :", "Vente de 1 unité = 23 €           (+ 0%)")
      .addField("🐟 Pêcheur :", "Vente de 1 unité = 11 €           (+ 0%)")
      .addField("⛽ Raffineur :", "Vente de 1 unité = 61 €           (+ 0%)")
      .setTimestamp()
      .setFooter(
        "Créer par adrien dt#1553",
        "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
      );
    msg.channel.send(bourse);
  }
});

var jeuxs = [`En cours de développement`];

setInterval(function() {
  var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];

  bot.user.setPresence({
    game: {
      name: jeux,
      type: "STREAMING"
    }
  });
}, 3000);

bot.login(config.token);
