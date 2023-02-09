import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;SasukeBotz\nNICKNAME:👑 Owner Rizkyy\nORG:YT : @RizkyEditz556\nTITLE:soft\nitem1.TEL;waid=6283143155277:+6283143155277\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/I2E5SFIX562PG1\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: sanzgaminh@gmail.com\nitem3.X-ABLabel:💌 Mail Owner ☸𝐒𝐚𝐧𝐳⚘𝐁𝐎𝐓𝐙࿐\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 03 juli 2003\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: author, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *SasukeBotz* Ya Njg`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['nomor']
handler.tags = ['nomor']

handler.command = /^(nomor)$/i

export default handler