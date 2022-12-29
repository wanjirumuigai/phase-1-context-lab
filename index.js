/* Your Code Here */
function createEmployeeRecord([name1, name2, job, number]) {
let employeeObj = {
    firstName: name1,
    familyName: name2,
    title: job,
    payPerHour: number,
    timeInEvents: [],
    timeOutEvents: []

}

return employeeObj;
}


    function createEmployeeRecords(array) {
    let employeeRecs = array.map(item => createEmployeeRecord(item))

    return employeeRecs
    }

function createTimeInEvent(datestamp) {

let object = {
    type: "TimeIn",
    hour: parseInt(datestamp.split(" ")[1]),
    date: datestamp.split(" ")[0]
}
this.timeInEvents.push(object)

return this;
}

function createTimeOutEvent(datestamp) {

    let object = {
        type: "TimeOut",
        hour: parseInt(datestamp.split(" ")[1]),
        date: datestamp.split(" ")[0]
    }
    this.timeOutEvents.push(object)
    
    return this;
    }
function hoursWorkedOnDate(date) {
    for(let i=0; i<this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date == date) {
           return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100
        }
    }
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
  }
function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find(record => record.firstName === name)
}

function calculatePayroll(array) {
    let total = 0
    array.forEach(employee => {
      total += allWagesFor.apply(employee)
    });
    return total
}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

