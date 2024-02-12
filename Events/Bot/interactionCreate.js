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

    command.run(client, interaction, interaction.options, client.db)
  }
})