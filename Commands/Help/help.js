const Discord = require("discord.js");

const Command = require("../../Base/Command");

module.exports = new Command({
    name: "help",
    description: "Permet de voir le menu d'aide général de FirstSky.",
    use: "help",
    perm: Discord.Permissions.FLAGS.VIEW_CHANNEL,
    category: "Aide",


    async run(client, message, args) {
        /**
         * ☑️ mainEmbed = Choix du Serveur (Gamma & Alpha)
         * ☑️ gammaEmbed = Embed d'aide au serveur Gamma
         * ☑️ alphaEmbed = Embed d'aide au serveur Alpha (logique)
         * ☑️ shopsGammaEmbed = Embed d'aide sur les boutiques Gamma
         * ☑️ shopsAlphaEmbed = Embed d'aide sur les boutiques Alpha
         * ❌ cmdGammaEmbed = Embed d'aide sur les commandes Gamma
         * ❌ cmdAlphaEmbed = Embed d'aide sur les commandes Alpha
         * ❌ farmGammaEmbed = Embed d'aide sur les fermes Gamma (Niveau Débutant / Intermédiaire)
         * ❌ farmAlphaEmbed = Embed d'aide sur les fermes Gamma (Niveau Débutant / Intermédiaire)
         * ❌ toolsGammaEmbed = Embed d'aide sur les outils Gamma
         * ❌ toolsAlphaEmbed = Embed d'aide sur les outils Alpha
         */
        // mainEmbed ------------------------------------


        let mainEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide")
            .setDescription(`
Bienvenue dans le menu d'aide de ${client.user} ! Ici, tu pourras retrouver l'intégralité des commandes utiles
sur [FirstSky](https://discord.gg/firstsky) ! 

\`⬇️\` Utilise les boutons pour choisir ton serveur !
`)
            .setColor(client.color.base)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })


        // gammaEmbed ------------------------------------
        let gammaEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide")
            .setDescription(`
    Bienvenue dans le menu d'aide de ${client.user} ! Ici, tu pourras retrouver l'intégralité des commandes utiles
    sur [FirstSky Gamma](https://discord.gg/firstsky) ! 
    \`⬇️\` Utilise le menu pour choisir une catégorie !     
    `)
            .setColor(client.color.gamma)
            .setImage(client.config.images.gamma)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })


        let shopsGammaEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide aux Boutiques Gamma")
            .setDescription(`
\`/mc shop\` : Ouvre le mobcoins shop (Fais la commande </mcshop:1> pour plus de détails)     
\`/shop\` : Ouvre le shop (Fais la commande </shop:1> pour plus de détails)     
\`/ah ou /hdv\` : Ouvre le mobcoins shop (Fais la commande </ah:1> pour plus de détails)
`)
            .setColor(client.color.gamma)
            .setImage(client.config.images.gammaBoutique)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })


        let cmdGammaEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide aux Commandes Gamma")
            .setDescription(`
**Catégorie Île 🏝️** 
\`/ob go ou /is\` : Permet d'aller à son île (Fais la commande </is:1> pour plus de détails)    
\`/ob team invite (pseudo)\` : Permet d'inviter un joueur sur votre île (Fais la commande </is:1> pour plus de détails) 
\`/ob team expel (pseudo)\` : Permet d'expluser un joueur sur votre île (Fais la commande </is:1> pour plus de détails) 
\`/ob team promote (pseudo)\` : Permet de promouvoir un joueur sur votre île (Fais la commande </is:1> pour plus de détails) 
\`/ob team demote (pseudo)\` : Permet de rétrograder un joueur sur votre île (Fais la commande </is:1> pour plus de détails)
\`/ob team leave\` : Permet de quitter votre île si vous êtes membre et par propriètaire. (Fais la commande </is:1> pour plus de détails)
\`/ob team setowner (pseudo)\` : Permet de désigner un nouveau propriètaire de votre île. (Fais la commande </is:1> pour plus de détails)



**Catégorie Objets ✨**

\`/kits\` : Ouvre le menu des kits en jeu (Fais la commande </kits:1> pour plus de détails)     
\`/donate (pseudo)\` : Permet de donner un item à un joueur. \n\`🔴 Attention : Le don d'item est interdit sur le serveur. Néanmoins, vous pouvez utiliser cette commande pour vendre par exemple.\` (Fais la commande </donate:1> pour plus de détails)
`)
            .setColor(client.color.gamma)
            .setImage(client.config.images.gammaBoutique)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })




        // alphaEmbed ------------------------------------
        let alphaEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide")
            .setDescription(`
    Bienvenue dans le menu d'aide de ${client.user} ! Ici, tu pourras retrouver l'intégralité des commandes utiles
    sur [FirstSky Alpha](https://discord.gg/firstsky) ! 
    \`⬇️\` Utilise le menu pour choisir une catégorie !     
    `)
            .setColor(client.color.alpha)
            .setImage(client.config.images.alpha)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })

        let shopsAlphaEmbed = new Discord.MessageEmbed()
            .setTitle("👋 Bienvenue dans le menu d'aide aux Boutiques Alpha")
            .setDescription(`
\`/mc shop\` : Ouvre le mobcoins shop (Fais la commande </mcshop:1> pour plus de détails)     
\`/shop\` : Ouvre le shop (Fais la commande </shop:1> pour plus de détails)     
\`/ah ou /hdv\` : Ouvre le mobcoins shop (Fais la commande </ah:1> pour plus de détails)
`)
            .setColor(client.color.alpha)
            .setImage(client.config.images.alphaBoutique)
            .setFooter({ text: "Tout les droits reviennent à FirstSky Inc.", iconURL: client.user.avatarURL({ dynamic: true }) })

        let serverRow = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
                .setCustomId("alpha")
                .setStyle("PRIMARY")
                .setLabel("Serveur Alpha")
            ,
            new Discord.MessageButton()
                .setCustomId("gamma")
                .setStyle("SUCCESS")
                .setLabel("Serveur Gamma")
        )

        let gammaMenu = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("gamma_menu")
                .setMinValues(1)
                .setMaxValues(1)
                .setPlaceholder("Navigue dans le menu...")
                .setOptions(
                    [
                        { label: "Boutique", description: "Accèdes au différentes infos sur les boutiques FirstSky Gamma", emoji: "💰", value: "boutique" },
                        { label: "Commandes", description: "Accèdes au différentes infos sur les Commandes FirstSky Gamma", emoji: "🔧", value: "commandes" },
                        { label: "Grades", description: "Accèdes au différentes infos sur les Grades FirstSky Gamma", emoji: "⚡", value: "grades" },
                        { label: "Fermes", description: "Accèdes au différentes infos sur les Fermes FirstSky Gamma", emoji: "🥖", value: "fermes" },
                        { label: "Outils", description: "Accèdes au différentes infos sur les Outils FirstSky Gamma", emoji: "🔨", value: "outils" },
                    ]
                )
        )
        let alphaMenu = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("alpha_menu")
                .setMinValues(1)
                .setMaxValues(1)
                .setPlaceholder("Navigue dans le menu...")
                .setOptions(
                    [
                        { label: "Boutique", description: "Accèdes au différentes infos sur les boutiques FirstSky Gamma", emoji: "💰", value: "boutique" },
                        { label: "Commandes", description: "Accèdes au différentes infos sur les Commandes FirstSky Gamma", emoji: "🔧", value: "commandes" },
                        { label: "Grades", description: "Accèdes au différentes infos sur les Grades FirstSky Gamma", emoji: "⚡", value: "grades" },
                        { label: "Fermes", description: "Accèdes au différentes infos sur les Fermes FirstSky Gamma", emoji: "🥖", value: "fermes" },
                        { label: "Outils", description: "Accèdes au différentes infos sur les Outils FirstSky Gamma", emoji: "🔨", value: "outils" },
                    ]
                )
        )


        message.reply({ embeds: [mainEmbed], components: [serverRow] })
        const collector = message.channel.createMessageComponentCollector({
            filter: x => {
                if (x.user.id === message.user.id) {
                    return true;
                } else {
                    x.reply({ embeds: [{ title: "Erreur", description: `${x.user} vous ne pouvez pas utliser ces interactions. Vous n'êtes pas l'auteur du message !`, color: client.color }], ephemeral: true })
                    return false;
                }
            },
            time: 600000,
            idle: 30000
        })

        collector.on("collect", async interaction => {
            if (interaction.isButton()) {
                if (interaction.customId === "gamma") {
                    interaction.deferUpdate()
                    interaction.message.edit({ embeds: [gammaEmbed], components: [gammaMenu] })
                }
                if (interaction.customId === "alpha") {
                    interaction.deferUpdate()

                    interaction.message.edit({ embeds: [alphaEmbed], components: [alphaMenu] })
                }
            }

            if (interaction.isSelectMenu()) {
                if (interaction.customId === "gamma_menu") {
                    if (interaction.values[0] === "boutique") {
                        await interaction.reply({ embeds: [shopsGammaEmbed], ephemeral: true })
                    }

                    if (interaction.values[0] === "commandes") {
                        await interaction.reply({ embeds: [cmdGammaEmbed], ephemeral: true })
                    }
                }
            }
            if (interaction.isSelectMenu()) {
                if (interaction.customId === "alpha_menu") {
                    if (interaction.values[0] === "boutique") {
                        await interaction.reply({ embeds: [shopsAlphaEmbed], ephemeral: true })
                    }
                }
            }
        })



    },
});
