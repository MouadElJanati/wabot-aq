let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakgambar[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebakgambar', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} second*
Tipe ${usedPrefix}hint for hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.url, 'tebakgambar.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `Time's up!\nThe answer is *${json.answer}*`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakgambar']
  handler.tags = ['game']
  handler.command = /^tebakgambar/i
  
  module.exports = handler
