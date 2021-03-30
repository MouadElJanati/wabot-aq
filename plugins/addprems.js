const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag one of them, and enter the number for verification !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var number = m.sender
    m.reply(`*Done successfully add User✅*\n\n*Number : wa.me/${number.split("@s.whatsapp.net")[0]}\n*Expired:* 30Days\n*Thanks For Added Premium !*`)
  // } else m.reply('There is a host number here...')
}
handler.help = ['addprems <number>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
