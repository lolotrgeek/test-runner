const { spawn_node } = require("process-spawn")

function Run(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) console.log(err)
        files.forEach((file, i) => {
            if (file === 'utils') files.splice(i)
            console.log(directoryPath + file)
            spawn_node(directoryPath + file, 1)
        })
    })
}

module.exports = { Run }