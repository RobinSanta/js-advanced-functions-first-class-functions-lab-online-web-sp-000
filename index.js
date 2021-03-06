function returnFirstTwoDrivers(drivers=[]) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers=[]) {
    return drivers.slice(drivers.length - 2, drivers.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare) {
        return fare * int
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers=[], func) {
    if (func == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }

    if (func == returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}