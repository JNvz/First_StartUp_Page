function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    minute = checkTime(minute);
    window.document.getElementById("clock").innerHTML = hour + ":" + minute;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
