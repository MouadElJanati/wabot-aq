// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { text, usedPrefix }) => {
    goblok = `example: \n${usedPrefix}tr language code|text\n${usedPrefix}tr id|thank you\n\nsupported languages: https://cloud.google.com/translate/docs/language`
    if (!text) throw goblok

    let [to, trans] = text.split`|`

    if (!to) throw `Please enter the language code\nexample: \n\n${usedPrefix}tr id|thank you\n\nsupported languages: https://cloud.google.com/translate/docs/language`
    if (!trans) throw `Please enter the sentence you want to translate\nexample: \n\n${usedPrefix}tr id|thank you`

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`Pesan: ${trans}\n\nTerjemahan: ${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw goblok
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

