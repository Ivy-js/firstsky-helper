const { Permissions, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Modal, TextInputComponent  } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice")
const Command = require("../../Base/Command");

module.exports = new Command({
  name: "event",
  description: "Permet d'avoir l'événement en cours",
  use: "event",
  perm: Permissions.FLAGS.VIEW_CHANNEL,
  category: "Event",
  ownerOnly : false, 

  async run(client, message, args) {
    let Name = (await client.db.get("Event.name"))
    let Description = (await client.db.get("Event.description"))
    let Color = (await client.db.get("Event.color"))
    let checkIfEvent = (await client.db.get("Event"))

    if(checkIfEvent < 1){
        message.reply({embeds : [
            {
                title : "Erreur",
                description : "Il n'y a pas d'événement en cours",
                color : client.color
            }, 
        ], ephemeral : true})
    }


    console.log(Name, Description, Color)
  }
});
