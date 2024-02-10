const Discord = require("discord.js");
const fs = require("fs");
const intents = new Discord.Intents(32767);
const config = require("../Config/config.json");
const Command = require("./Command");
const Event = require("./Event");
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const GiveawayManager = require("discord-regiveaways"); 

require("colors");
class Client extends Discord.Client {
  constructor(options) {
    super({ intents });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    const manager = new GiveawayManager.GiveawayManager(this, {
      storage : "./giveaways.json", 
      config : {
        botsCanWin : false, 
        embedColor : "#AED581", 
        embedColorEnd : this.color, 
        reaction : "🎆", 
        botName : `🎆 Giveaway`, 
        forceUpdateEvery : 3600, 
        endedGiveawaysLifetime : 1_600_000
      }
    })
    this.commands = new Discord.Collection();
    this.color = config.color;
    this.prefix = config.prefix;
    this.config = config
    this.db = db,
    this.GiveawayManager = manager; 
  }

  start(token) {

    fs.readdirSync("./Commands")
    .forEach((dirs) =>{
      fs.readdirSync(`./Commands/${dirs}/`)
      .filter((file) => file.endsWith(".js"))
      .forEach(async (f) => {
        /**
         * @type {Command}
         */
    
        const props = require(`../Commands/${dirs}/${f}`);
        if(dirs === "Contact") {
        console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgBlue);
        } else if(dirs === "Fermes"){
        console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgRed);
        }
        else if(dirs === "Boutiques"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgGreen);
        } else if(dirs === "Commandes"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgMagenta);
        } else if(dirs === "Outils"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgBlue);
        }
        else if(dirs === "Grades"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgCyan);
        }
        else if(dirs === "Help"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.bgYellow);
        }
        this.commands.set(props.name, props);
      })
    })

    fs.readdirSync("./Events").filter(dir => dir !== "invite").forEach((dirs) => {
      fs.readdirSync(`./Events/${dirs}/`)
        .filter((file) => file.endsWith(".js"))
        .forEach(async (evt) => {
          /**
           * @type {Event}
           */

          const event = require(`../Events/${dirs}/${evt}`);
          console.log(`[⌛ ${dirs}] - ${evt} Chargée avec succès`.bgYellow);
          this.on(event.event, event.run.bind(null, this));
        });
    });
    fs.readdirSync("./Events").filter(dir => dir === "invite").forEach((dirs) => {
      fs.readdirSync(`./Events/${dirs}/`)
        .filter((file) => file.endsWith(".js"))
        .forEach(async (evt) => {
          /**
           * @type {InviteEvent}
           */

          const event = require(`../Events/${dirs}/${evt}`);
          console.log(`[⌛] - ${evt} Chargée avec succès`.bgYellow);
          this.on(event.event, event.run.bind(null, this));
        });
    });

    this.login(token);
  }
}

module.exports = Client;
