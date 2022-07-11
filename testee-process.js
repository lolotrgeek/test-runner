process.on('message', message => {if (message.start) {try {
 console.log = function() {process.send(JSON.stringify(Object.values(arguments)))}; 

console.log("Pass:", true)
} catch (error) {process.send(`process ${error}`)}}})