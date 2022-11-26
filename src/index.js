require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { PrismaClient } = require('@prisma/client');

client.commands = new Collection();
client.embeds = require('./data/config/embeds');
client.e = require('./data/config/emotes');
client.c = require('./data/config/colors');
client.config = require('./data/config/config');
client.prisma = new PrismaClient();

module.exports = client;

fs.readdirSync('./src/handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);