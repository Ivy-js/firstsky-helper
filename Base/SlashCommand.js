const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { SlashCommandBuilder } = require("@discordjs/builders")
const { Routes } = require('discord-api-types/v10')
require("colors")
const config = require("../Config/config")

module.exports = async bot => {

    let commands = [
     new SlashCommandBuilder()
     .setName("help")
     .setDescription("Permet de voir le menu d'aide général de FirstSky."),

     new SlashCommandBuilder()
     .setName("admin")
     .setDescription("Permet d'avoir accès au menu d'administrateur du bot")
     , 
     new SlashCommandBuilder()
        .setName("event")
        .setDescription("Permet d'avoir l'événement en cours")
    ];
    commands.push.toString(commands)
    
    const rest = new REST({version: '10'}).setToken(config.token);

    await rest.put(Routes.applicationCommands(bot.user.id), {body: commands});
    console.log("[(/)]".cyan + " chargés avec succès".white);
   
}; 