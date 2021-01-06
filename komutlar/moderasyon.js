const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("#140589")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/785856261282725908/792343583302221824/SPOILER_standard_2.gif" )
  .setImage('https://cdn.discordapp.com/attachments/785856261282725908/792347003157872640/standard_3.gif')
    .setDescription(
      `Toplamda Botta **${client.commands.size + 5}** Adet Komut Bulunuyor!` +
        "\n\n `b!i` **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `b!davet` **Yazarak Botun Davet Linkini Alırsınız.**"
    )
    .addField(
      `➤ Komutlar`,
      `
 
:1234: | **b!sayaç**:*Canlı Sayacı Aktif Eder*. .

:bomb: | **b!nuke**:*Odadaki Mesajların Hepsini Siler*.

🙋‍ | **b!sa-as <aç/kapat>**:*Sa-As Sistemini Aktif Eder *.

:chains: | **b!reklam-engelle**:*Reklam Yapan Kişileri Durdurur* .

:scream: | **b!kick**:*Birini Kickler*.

:no_entry_sign: | **b!ban**:*Birini Sunucudan Yasaklar*.

:no_entry_sign: | **b!unban**:*Birini Sunucudan Yasağını Kaldırır*.

:police_officer: | **b!rol-koruma**:*Rolleri Korur*.

:lock: | **b!capslock-engelleme**:*Caps Locku Engeller*.

🎔 | **b!sil**:*İstediğiniz Kadar Mesaj Siler*.

🎔 | **b!fake-hesap**:*Fake Hesap Koruma Açar*.

:no_entry_sign: | **b!küfür-engel**:*Yazılan Kanaldaki Küfürü Yasaklar*.

:no_entry_sign: | **b!otorol-ayarla @rol** : *Sunucuya girene belirlediğiniz rolü otomatik verir.*

:no_entry_sign: | **b!mute @kullanici @zaman @sebep** : *Kullanıcıyı Susturur.*` )

    .addField(
      "➤ Yardım & Hata & Bug  \n",
      " | **b!bildir <mesaj>**:*Bug Bildirirsiniz Bot Destek Sunucusuna Ulaşır* "
    )

    .addField(
      `➤ Bilgilendirme`,
      `
⌛ | **Beta Bot Her Gün Güncelleniyor!**.
  **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )

    .addField(
      `**➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu:](https://discord.gg/ACJCBETmH7) \n >  » [Kod Sitemiz](https://maximuscode.tk/) \n > » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=782131517069328395&scope=bot&permissions=2147483647) >  » [Bot List Sunucumuz](https://discord.gg/wXTvmBYCz8)`
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["moderasyon , m"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: ".",
  usage: ""
};