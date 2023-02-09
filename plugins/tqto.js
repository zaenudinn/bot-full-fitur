import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ @${'6285876501859'.split('@')[0]}(Owner)

Terimakasih Juga Untuk Bang Rizky :
➸ https://youtube.com/@RizkyEditz555 (LinkYT)

─────────────────────
• Allah SWT
• My ortu
• RizkyEditz ( Me )
• ${await conn.getName(m.sender)} ( You )
• SasukeTeam
• Adiwajshing
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• NexEp
• Jarot
• Tio
• Aca Mirabel
• Ramdani
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/7EquzVzq3qY'},
'mimetype':global.ddocx,
'fileName':'SasukeBotz',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/7EquzVzq3qY',
'mediaType':2,
'previewType':'pdf',
'title':`SasukeBotz: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`By RizkyEditz`,
'thumbnail':await(await fetch('https://telegra.ph/file/197c90d5e06d460208b3f.jpg')).buffer(),
'sourceUrl':'https://youtu.be/7EquzVzq3qY'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Buat Loe Semua Ngen-

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'▣ Mҽɳυ ▣'},'type':1},
{'buttonId':'Hai','buttonText':{'displayText':'🎈Hαʅʅσ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}