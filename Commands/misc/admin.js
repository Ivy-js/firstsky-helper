const { Permissions, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice")
const Command = require("../../Base/Command");

module.exports = new Command({
    name: "admin",
    description: "Permet d'avoir accès au menu d'administrateur du bot",
    use: "admin",
    perm: Permissions.FLAGS.VIEW_CHANNEL,
    category: "Aide",
    ownerOnly: true,

    async run(client, message, args) {
        console.log("caca")
        let embed = new MessageEmbed()
            .setTitle(`💻 Menu Administrateur`)
            .setDescription(`
Utilise le menu ci-dessous pour naviguer dans le menu.

**__Bot Info__** : 

\`⏳\` Latency : \`${client.ws.ping}ms\`
\`👥\` Users : \`${client.users.cache.size}\`
\`🏠\` Guilds : \`${client.guilds.cache.size}\`
\`🔧\` Commands : \`${client.commands.size}\`
    `)
            .setColor(client.color)
            .setFooter({ text: `Menu d'admin ouvert par ${message.user.username}`, iconURL: client.user.avatarURL({ dynamic: true }) })



        let menu = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("admin")
                .setMaxValues(1)
                .setMinValues(1)
                .setOptions([
                    { label: "Changer l'événement", description: "Permet de changer l'événement en cours", value: "event", emoji: "🎆" },
                    { label: "Changer les valeurs d'un item", description: "Permet d'éditer la valeur d'un Item", value: "itemvalue", emoji: "💰" },
                ])
        )
        let vocBtn = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("vocbtn")
                .setLabel("Connecter le bot à la vocal")
                .setStyle("SECONDARY")
                .setDisabled(message.guild.id === "1195908780861427852" ? false : true)

        )



        message.reply({ embeds: [embed], components: [menu, vocBtn] })
        const collector = message.channel.createMessageComponentCollector({
            filter: x => {
                if (x.user.id === message.user.id) {
                    return true;
                } else {
                    x.reply({ embeds: [{ title: "Erreur", description: `${x.user} vous ne pouvez pas utliser ces interactions. Vous n'êtes pas l'auteur du message !`, color: bot.color }], ephemeral: true })
                    return false;
                }
            },
            time: 600000,
            idle: 30000
        })


        collector.on("collect", async (interaction) => {
            if (interaction.isButton()) {
                if (interaction.customId === "vocbtn") {
                    const connection = joinVoiceChannel({
                        channelId: "1206061932747034685",
                        guildId: interaction.guild.id,
                        adapterCreator: interaction.guild.voiceAdapterCreator,
                    })

                    interaction.reply({ content: `> Je me suis bien connecté au salon <#1206061932747034685> !`, ephemeral: true })
                }
            }


            if (interaction.isSelectMenu()) {

            }
        })
    },
});
