let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [081515860089]
│ • Telkomsel [081334177340]
╰────
`.trim()) // add yourself if you want
handler.help = ['donation']
handler.tags = ['info']
handler.command = /^dona(te|tion)$/i

module.exports = handler
