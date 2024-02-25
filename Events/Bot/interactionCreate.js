const Event = require("../../Base/Event")
const Discord = require("discord.js")

const allowedUserIDs = {
  ivy: "1114616280138395738",
};

module.exports = new Event("interactionCreate", async (client, interaction) => {

  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!interaction.member.permissions.has(new Discord.Permissions(command.permission)) && command.permission !== Discord.Permissions.FLAGS.VIEW_CHANNEL) return interaction.reply("Vous n'avez pas la permission requise pour exécuter la commande.")
    if (command.ownerOnly) {
      const userIsAllowed = Object.values(allowedUserIDs).includes(interaction.user.id);

      if (!userIsAllowed) {
        return interaction.reply({ content: "Vous devez être développeur.", ephemeral: true });
      }
    }

<<<<<<< HEAD
    if(interaction.isModalSubmit()){
      if(interaction.customId === "ChangeEvent"){               
        const EventName = interaction.fields.getTextInputValue("EventName")
        const EventDescription = interaction.fields.getTextInputValue("EventDescription")
        const EventColor = interaction.fields.getTextInputValue("EventColor")

        let Embed = new Discord.MessageEmbed()
        .setTitle(`🎆 Nouvel événement`)
        .setDescription(`Un nouvel événement a été créé par ${interaction.user.username}\n Voici les informations de l'événement : \n\n **Nom de l'événement** : ${EventName}\n **Description de l'événement** : ${EventDescription}`)
        .setColor(EventColor)
        .setFooter({text : `Événement créé par ${interaction.user.username}`, iconURL : client.user.avatarURL({dynamic: true})})

        interaction.reply({embeds : [Embed]})

        client.db.set(`Event.name`, EventName)
        client.db.set(`Event.description`, EventDescription)
        client.db.set(`Event.color`, EventColor)
      }
    }
=======
    command.run(client, interaction, interaction.options, client.db)
  }
>>>>>>> 998496350f8af33b5d3d700b08da39d274a74616
})