const { spawn_node } = require("process-spawn")
const fs = require('fs')

function Run(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) console.log(err)
        let done = 0
        files.forEach((file, i) => {
            if (file === 'utils') files.splice(i)
            else {
                console.log(directoryPath + file)
                spawn_node(directoryPath + file, 1, message => {
                    try {
                        let data = JSON.parse(message)
                        if (data.find(datum => datum === "Pass:")) {
                            console.log(...data)
                            done++
                        }

                        if (done === files.length) process.exit()
                    } catch (error) {
                        console.log(message)
                    }
                })
            }
        })
    })
}

module.exports = { Run }