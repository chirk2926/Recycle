const fs = require('fs')
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');


dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = {}
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands[command.data.name] = command
}

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const command = commands[interaction.commandName];
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'エラー',
            ephemeral: true,
        })
    }
});

client.login(process.env.DISCORD_TOKEN);