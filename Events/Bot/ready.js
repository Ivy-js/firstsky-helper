const Event = require("../../Base/Event");
const Discord = require("discord.js");
const slashCmd = require("../../Base/SlashCommand");
const { joinVoiceChannel } = require("@discordjs/voice")
module.exports = new Event("ready", (client) => {
    slashCmd(client);
    console.log(`[DISCORD API]`.green + ` - ${client.user.username} est en ligne`);
    client.user.setActivity({ name: "👋 Je suis sous développement", type: "WATCHING" });
    let g = client.guilds.cache.get("1195908780861427852")

    const connection = joinVoiceChannel({
        channelId: 1206061932747034685,
        guildId: 1195908780861427852,
        adapterCreator: g.voiceAdapterCreator,
    });

});
