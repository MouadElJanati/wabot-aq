let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != conn.user.jid || !/^Results from/i.test(m.quoted.text)) throw false
  conn.math = conn.math ? conn.math : {}
  if (!(id in conn.math)) throw 'That question has ended'
  if (m.quoted.id == conn.math[id][0].id) {
  let math = JSON.parse(JSON.stringify(conn.math[id][1]))
  if (m.text == math.result) {
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    throw `*Correct answer!*\n+${math.bonus} XP`
  } else {
    if (--conn.math[id][2] == 0) {
      clearTimeout(conn.math[id][3])
      delete conn.math[id]
      throw `*Opportunities run out!*\nAnswer: *${math.result}*`
    } else throw `*Wrong answer!*\nStill available ${conn.math[id][2]} opportunity`
  }
 }
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
