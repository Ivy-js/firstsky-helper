const Discord = require("discord.js");
const fs = require("fs");
const intents = new Discord.Intents(32767);
const config = require("../Config/config.json");
const Command = require("./Command");
const Event = require("./Event");
const { QuickDB } = require("quick.db");
const { GiveawayManager } = require("discord-regiveaways");
const db = new QuickDB();

var color = require("colors-cli/safe")
require("colors");

class Client extends Discord.Client {
  constructor(options) {
    super({ intents });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    const manager = new GiveawayManager(this, {
      storage: "./giveaways.json",
      config: {
        botsCanWin: false,
        embedColor: "#AED581",
        embedColorEnd: this.color,
        reaction: "🎆",
        botName: `🎆 Giveaway`,
        forceUpdateEvery: 3600,
        endedGiveawaysLifetime: 1_600_000
      }
    })
    this.commands = new Discord.Collection();
    this.color = config.color.base;
    this.prefix = config.prefix;
    this.config = config
    this.db = db,
      this.GiveawayManager = manager;
  }

  start(token) {

    fs.readdirSync("./Commands")
<<<<<<< HEAD
    .forEach((dirs) =>{
      fs.readdirSync(`./Commands/${dirs}/`)
      .filter((file) => file.endsWith(".js"))
      .forEach(async (f) => {
        /**
         * @type {Command}
         */
    
        const props = require(`../Commands/${dirs}/${f}`);
        if(dirs === "Contact") {
        console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.blue);
        } else if(dirs === "Fermes"){
        console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.red);
        }
        else if(dirs === "Boutiques"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.green);
        } else if(dirs === "Commandes"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.magenta);
        } else if(dirs === "Outils"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.blue);
        }
        else if(dirs === "Grades"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.cyan);
        }
        else if(dirs === "Help"){
          console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.yellow);
        }
        else if(dirs === "misc"){
          console.log(color.x202.bold(`[📂 ${dirs}] - ${f} Chargée avec succès`));
        }
        else if(dirs === "Events"){
          console.log(color.x167.bold(`[📂 ${dirs}] - ${f} Chargée avec succès`));
        }
        this.commands.set(props.name, props);
=======
      .forEach((dirs) => {
        fs.readdirSync(`./Commands/${dirs}/`)
          .filter((file) => file.endsWith(".js"))
          .forEach(async (f) => {
            /**
             * @type {Command}
             */

            const props = require(`../Commands/${dirs}/${f}`);

            switch (dirs) {
              case 'Contact':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.blue);
                break;
              case 'Fermes':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.red);
                break;
              case 'Boutiques':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.green);
                break;
              case 'Commandes':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.magenta);
                break;
              case 'Outils':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.blue);
                break;
              case 'Grades':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.cyan);
                break;
              case 'Help':
                console.log(`[📂 ${dirs}] - ${f} Chargée avec succès`.yellow);
                break;
              case 'misc':
                console.log(color.x202.bold(`[📂 ${dirs}] - ${f} Chargée avec succès`));
            };

            this.commands.set(props.name, props);
          })
>>>>>>> 998496350f8af33b5d3d700b08da39d274a74616
      })

    fs.readdirSync("./Events").filter(dir => dir !== "invite").forEach((dirs) => {
      fs.readdirSync(`./Events/${dirs}/`)
        .filter((file) => file.endsWith(".js"))
        .forEach(async (evt) => {
          /**
           * @type {Event}
           */

          const event = require(`../Events/${dirs}/${evt}`);
          console.log(`[⌛ ${dirs}] - ${evt} Chargée avec succès`.yellow);
          this.on(event.event, event.run.bind(null, this));
        });
    });


    this.login(token);
  }
}

module.exports = Client;
