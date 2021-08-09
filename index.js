// Code your solution here
function findMatching(driverArray, name) {
    return driverArray.filter((driver) => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(driverArray, name) {
    return driverArray.filter((driver) => {
        return driver.slice(0, name.length).toLowerCase() === name.toLowerCase()
    })
}

function matchName(driverArray, name) {
    return driverArray.filter((driver) => {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}