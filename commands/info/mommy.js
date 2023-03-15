const { SlashCommandBuilder, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mommy')
        .setDescription('hmm?, who knows?'),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        await interaction.reply('<@1079466225861673120> Could be both 💀💀');
    },      
};