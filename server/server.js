// server.js

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    // if(message.message === 'login'){
    //   ws.send(
    //     JSON.stringify({
    //       message: 'userOK',
    //       userID: message.userID,
    //       password: message.password,
    //     })
    //   )
    // }
  })
  let start = new Date();
      for (let i = 0; i < 1000; i++) {
        let sendTime = new Date();
        let time = sendTime - start;
        
          ws.send(
            JSON.stringify({
              message_number: i,
              start_time: start,
              send_time: sendTime,
              time: time
            })
          )
        
        
      }
})
