

function timer() {
    var eidDate = new Date(2024, 6, 10);
    var now = new Date();
    var diffMs = eidDate - now;
    var diffDays = Math.floor(diffMs / 86400000); 
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); 
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    var diffsec = Math.floor((diffMs%(1000*60)) / 1000);
    
    var timeRemaining = `${diffDays} days, ${diffHrs} hours,  ${diffMins} minutes ${diffsec} second`;
    document.getElementById("time-remaining").innerText = timeRemaining;
}
   

setInterval(timer, 1000)
timer