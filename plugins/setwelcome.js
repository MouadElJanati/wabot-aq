let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Welcome set successfully\n@user (Mention)\n@subject (Group tittle)')
  } else throw 'Where is the text?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

