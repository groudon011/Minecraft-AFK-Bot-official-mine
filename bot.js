const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 10000

app.get('/', (req,res)=>{
  res.send("AFK Bot Running")
})

app.listen(PORT, ()=>{
  console.log("Web server running on port " + PORT)
})

function startBot(){

  console.log("Starting bot...")

  const bot = mineflayer.createBot({
    host: "akaag97_01.aternos.me",
    port: 27042,
    username: "Botu_001",
    version: false
  })

  bot.on('login', () => {
    console.log("Bot logged in")
  })

  bot.on('spawn', () => {
    console.log("Bot joined the server")

    setInterval(() => {

      const actions = ['jump','forward','back','left','right']
      const action = actions[Math.floor(Math.random()*actions.length)]

      bot.setControlState(action,true)

      setTimeout(()=>{
        bot.setControlState(action,false)
      },2000)

    },30000)

  })

  bot.on('end', () => {
    console.log("Bot disconnected, reconnecting...")
    setTimeout(startBot,5000)
  })

  bot.on('error', (err)=>{
    console.log("Error:",err)
  })

}

startBot()