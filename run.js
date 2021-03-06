const { Spawner } = require("process-spawn")

const spawner = new Spawner()
// spawner.debug = 'status'
spawner.complete = true

let done = 0

function decode(message) {
    try {
        return JSON.parse(message)
    } catch (error) {
        return message
    }
}

function listener(message, node) {
    try {
        let data = decode(message)
        if (Array.isArray(data)) {
            let isTest = data.findIndex(datum => datum === "Pass:")
            if (isTest > -1) {
                console.log(`[${node.name}] Pass:`, data[isTest + 1])
                spawner.end_node(node)
                done++
            }
        }
    } catch (error) {
        console.log(error)
    }
}

function Run(directoryPath) {
    let ignore = "utils"
    spawner.spawn_directory(directoryPath, (message, node) => listener(message, node), ignore)
}

module.exports = { Run }