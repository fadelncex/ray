const fs = require('fs')
const chalk = require('chalk')

global.keyopenai = ''
global.namabot = "TETEWBOT V1"
global.namaowner = "TETEWMOBA"
global.footer_text = "©2023 TETEWMOBA " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285240196900']
global.nomerowner = '6285240196900'
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = "*SERTAKAN BUKTI TRANSAKSI*"
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.allMenu = (pushname) =>{
  return `┏⬣ ⿻ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ⿻
┃➣ addsewa✯
┃➣ delsewa☠︎︎
┃➣ ceksewa✮
┃➣ creategc✘
┃➣ join𖣘
┃➣ setbot♨︎
┃➣ updatesetbot⚠︎
┃➣ delsetbot☯︎
┃➣ public☬
┃➣ self☣︎
┗━━━━━━━━━━━━━━━━⬣

┏⬣ ⿻ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ⿻
┃➣ welcome
┃➣ goodbye
┃➣ setwelcome
┃➣ changewelcome
┃➣ delsetwelcome
┃➣ setleft
┃➣ changeleft
┃➣ delsetleft
┃➣ antilink
┃➣ antilink2
┃➣ antiwame
┃➣ antiwame2
┃➣ opengc
┃➣ closegc
┃➣ hidetag
┃➣ add
┃➣ kick
┃➣ sticker
┃➣ listmenu
┃➣ setppgc
┃➣ setnamegc
┃➣ setdescgc
┃➣ linkgc
┃➣ resetlinkgc
┃➣ promote
┃➣ demote
┗━━━━━━━━━━━━━━━⬣
 
┏⬣ ⿻ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ⿻
┃➣ pay
┃➣ setpay
┃➣ addlist
┃➣ dellist
┃➣ updatelist
┃➣ renamelist
┃➣ jeda
┃➣ tambah
┃➣ kali
┃➣ kurang
┃➣ bagi
┃➣ setproses
┃➣ changeproses
┃➣ delsetproses
┃➣ setdone
┃➣ changedone
┃➣ delsetdone
┃➣ proses
┃➣ tunda
┃➣ batal
┃➣ done
┗━━━━━━━━━━━━━━━━━⬣

┏⬣⿻ 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞 𝗠𝗘𝗡𝗨 ⿻
┃➣ jpm
┃➣ cekidgc
┃➣ pushkontakv1
┃➣ pushkontakv2
┃➣ pushkontakv3
┃➣ savekontak
┗━━━━━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

module.exports.botMenu = (pushname) =>{
  return `┏━━⬣ ⿻ 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 ⿻
┃➣ allmenu
┃➣ groupmenu
┃➣ ownermenu
┃➣ storemenu
┃➣ pushkontakmenu
┗━━⬣ ⿻ TETEWMOBA ⿻`
}

module.exports.groupMenu = (pushname) =>{
  return `┏⬣ ⿻ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ⿻
┃➣ welcome
┃➣ goodbye
┃➣ setwelcome
┃➣ changewelcome
┃➣ delsetwelcome
┃➣ setleft
┃➣ changeleft
┃➣ delsetleft
┃➣ antilink
┃➣ antilink2
┃➣ antiwame
┃➣ antiwame2
┃➣ opengc
┃➣ closegc
┃➣ hidetag
┃➣ add
┃➣ kick
┃➣ stiker
┃➣ setppgc
┃➣ setnamegc
┃➣ setdescgc
┃➣ linkgc
┃➣ resetlinkgc
┃➣ promote
┃➣ demote
┗━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

module.exports.ownerMenu = (pushname) =>{
  return `┏⬣ ⿻ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ⿻
┃➣ addsewa
┃➣ delsewa
┃➣ ceksewa
┃➣ creategc
┃➣ join
┃➣ sendsc
┃➣ setbot
┃➣ updatesetbot
┃➣ delsetbot
┃➣ public
┃➣ self
┗━━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

module.exports.storeMenu = (pushname) =>{
  return `┏⬣ ⿻ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ⿻
┃➣ pay
┃➣ setpay
┃➣ addlist
┃➣ dellist
┃➣ updatelist
┃➣ renamelist
┃➣ list
┃➣ jeda
┃➣ tambah
┃➣ kali
┃➣ kurang
┃➣ bagi
┃➣ setproses
┃➣ changeproses
┃➣ delsetproses
┃➣ setdone
┃➣ changedone
┃➣ delsetdone
┃➣ proses
┃➣ tunda
┃➣ batal
┃➣ done
┗━━━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

module.exports.menu = (pushname) =>{
  return `┏⬣ ⿻ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ⿻
┃➣ welcome
┃➣ goodbye
┃➣ setwelcome
┃➣ changewelcome
┃➣ delsetwelcome
┃➣ setleft
┃➣ changeleft
┃➣ delsetleft
┃➣ antilink
┃➣ antilink2
┃➣ antiwame
┃➣ antiwame2
┃➣ opengc
┃➣ closegc
┃➣ hidetag
┃➣ add
┃➣ kick
┃➣ sticker
┃➣ listmenu
┃➣ setppgc
┃➣ setnamegc
┃➣ setdescgc
┃➣ linkgc
┃➣ resetlinkgc
┃➣ promote
┃➣ demote
┗━━━━━━━━━━━━━━━⬣
 
┏⬣ ⿻ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ⿻
┃➣ pay
┃➣ setpay
┃➣ addlist
┃➣ dellist
┃➣ updatelist
┃➣ renamelist
┃➣ jeda
┃➣ tambah
┃➣ kali
┃➣ kurang
┃➣ bagi
┃➣ setproses
┃➣ changeproses
┃➣ delsetproses
┃➣ setdone
┃➣ changedone
┃➣ delsetdone
┃➣ proses
┃➣ tunda
┃➣ batal
┃➣ done
┗━━━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

module.exports.pushkontakMenu = (pushname) =>{
  return `┏⬣⿻ 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞 𝗠𝗘𝗡𝗨 ⿻
┃➣ jpm
┃➣ cekidgc
┃➣ pushkontakv1
┃➣ pushkontakv2
┃➣ pushkontakv3
┃➣ savekontak
┗━━━━━━━━━━━━━━━━━━━⬣

© TETEWMOBA`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})