const { SlashCommandBuilder, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daddy')
        .setDescription('Replies with your daddy\'s name!'),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        await interaction.reply('<@1079466225861673120> is your daddy, son 💀');
    },
};