let date = document.createElement('h1')
var d = new Date()
var hour = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()
var weekday = new Array(7)
weekday[0] = 'Sunday'
weekday[1] = 'Monday'
weekday[2] = 'Tuesday'
weekday[3] = 'Wednesday'
weekday[4] = 'Thursday'
weekday[5] = 'Friday'
weekday[6] = 'Saturday'
var n = weekday[d.getDay()]

document.getElementById('time1').innerHTML = hour + ':' + min
document.getElementById('body').innerHTML = hour + ':' + min
document.getElementById('day').innerHTML = n