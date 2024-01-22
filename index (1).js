const { Client, RichPresence } = require("discord.js-selfbot-v13");
const express = require('express')
const server = express();
const client = new Client({checkUpdate: false,});

server.all('/', (req, res)=>{
    res.send("Any problems? contact Lxnyz#7772 On Discord")
})

client.on("ready", async() => {
  const r = new RichPresence()
    .setApplicationId('1036786648987471882')
    .setType('STREAMING') //You can change it to STREAMING, PLAYING, LISTENING, WATCHING, COMPETING
    .setURL('https://twitch.tv/apgrgt') //You can use your own Twitch link
    
   // .setState('2 of 12') //Text 2
    
      .setName('AFK') //Text 1
    
      .setDetails('AFK') //Text 3
    
    //.setAssetsSmallImage('mp:attachments/1009061802593763398/1095000347526828116/1681138826284.png') Remove "//" in the ".setAssetsSmallImage" section if you want to use a small image 
    
    //.setAssetsLargeText('life is like walking trash')


 
                        
                client.user.setActivity(r.toJSON());
  console.log(client.user.tag)
})

server.listen(3000, () => {
  console.log("Listening to Port:3000")

client.on('debug', (a) => {
  if(a.startsWith("Hit a 429")) process.kill(1)
})
  
  client.login(process.env.Token)
});