//SCRIPT RECODE BY FANGZ 💌
// JANGAN DI HAPUS📣

//BUY NO ENC? CHAT wa.me/6288215689772
//GITHUB: https://github.com/Fangzbotz2007
//KALAU GA ADA KASIH TANDA "-"


import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/gannn298_' //Instagram mu
global.sgh = 'https://github.com/ganang0209' //Github mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '085693663189' //Dana
global.povo = '089661945278' //Ovo
global.pgopay = '089661945278' //Gopay
global.ppulsa = '089661945278' //Pulsa 
global.ppulsa2 = '085693663189' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = 'https://saweria.co/Gann298' //Saweria

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '62881010342470' //Nomor Bot mu
global.nomorown = '6289661945278' //Nomormu
global.namebot = 'Rimuruu Botzz' //Nama bot mu
global.nameown = 'Gannn' //Nama mu


/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6289661945278', 'Gann ! 🥶', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [6289661945278] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 赤 FANGZ - BOT ⁩இ 」' //Wm
global.wm2 = '➳༻❀Rimuru Botzz'//Name Wm
global.wm3 = '赤 Rimuru Botzz'
global.botdate = `🗓️️ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = 'Ig: @gannn298_' //Ganti serah lu
global.author = '                © Rimuru Botzz By Gann' //Wm author


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/c4cfed0039e12dc8f4dd5.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/312d5d7a5ad4d4f8b5d7a.jpg' //Thumbnail 2
global.thumbbc = 'https://telegra.ph/file/3377bec81cd8614917d24.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/048f99ba552944162b6b9.jpg' //Bebas

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti

/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] wait...```'
global.eror = '⸨Acsess Danied⸩'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/180d276284be5474b0d00.jpg' //Ganti jadi foto Bot

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '╭────━•〔' //top
global.dmenub = '│ ⸙͎۪۫' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus Id\n◐Gann\n◐Pemakai bot ini\n◐I love you\n\n*Rimuru Botzz By Gann*' //footer

// COMMAND MENU
global.cmenut = '╭────━•〔' //top
global.cmenuh = '〕•━────┐' //header
global.cmenub = '│⸙͎۪۫ ︎' //body
global.cmenuf = '╰──────────━⃝┅⃝━────────┘\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '│⸙︎' //pembatas menu selector

global.htki = '––––––⦅' // Hiasan Titile (KIRI)
global.htka = '⦆––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = 'இ'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = 'Ig: @gannn298_'
global.stickauth = `© Rimuru Botzz\nOfficial by Whatsapp\nNomor: ${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
