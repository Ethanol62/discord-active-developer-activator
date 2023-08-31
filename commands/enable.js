const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');

module.exports = {

    name: "enable",
    description: "Permet de voir l'avatar d'un utilisateur",
    dm: false,

    async run(client, message, args) {

const embed = new EmbedBuilder()
.setDescription(`✅ Successfully activated badge. You have to wait few minutes/hours for enable it via developer portal.`)
.setColor('#36ff00')

message.reply({ embeds: [embed]})

  }}