let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Question:* ${command} ${text}
*Answer:* ${Math.floor(Math.random() * 10)} ${pickRandom(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'dekade', 'abad'])} again ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <question>')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

