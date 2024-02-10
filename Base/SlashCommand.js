const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { SlashCommandBuilder, SlashCommandIntegerOption } = require("@discordjs/builders")
const { Routes } = require('discord-api-types/v10')
require("colors")
const config = require("../Config/config")

module.exports = async bot => {

    let commands = [
     new SlashCommandBuilder()
     .setName("help")
     .setDescription("Permet de voir le menu d'aide général de FirstSky.")
    ];
    commands.push.toString(commands)
    
    const rest = new REST({version: '10'}).setToken(config.token);

    await rest.put(Routes.applicationCommands(bot.user.id), {body: commands});
    console.log("[(/)]".cyan + " chargés avec succès".white);
   
}; 