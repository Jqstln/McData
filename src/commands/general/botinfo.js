const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
    name: 'botinfo',
    description: 'Receive information about the bot.',
    category: 'general',
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        let embed = new EmbedBuilder({
            title: 'Bot Information',
            description: '> _Minecraft data, in Discord._',
            color: client.c.main,
            thumbnail: {
                url: client.config.logo
            },
            fields: [
                {
                    name: 'Username',
                    value: client.user.username,
                    inline: true
                },
                {
                    name: 'Version',
                    value: `[v${version}]()`,
                    inline: true
                },
                {
                    name: 'Guilds',
                    value: client.guilds.cache.size,
                    inline: true
                },
                {
                    name: 'Website',
                    value: `[Open Link](https://mcdata.fyxren.com)`,
                    inline: true
                },
                {
                    name: 'Memory Usage',
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
                    inline: true
                },
                {
                    name: 'Creator',
                    value: `[${client.users.cache.get(process.env.OWNER_ID).username}](https://github.com/Fyxren)`,
                    inline: true
                }
            ]
        });
        interaction.reply({ embeds: [embed] });
    }
};