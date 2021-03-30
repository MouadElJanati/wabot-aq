let handler = async (m, { conn, args }) => {
  throw // Fitur belum jadi :)
  if (!args[0]) throw 'Uhm... where is the URL?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [twitter].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(twitter(dl)?)$/i

module.exports = handler
