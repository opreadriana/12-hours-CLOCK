function showTime(){
    //new Date() constructor that returns the browser's date along with the time zone
    //but the date is statis so we need to keep updating it
    var date = new Date();
    //we extract the hours, minutes and seconds from the variable using these methods
    var h = date.getHours(); // between 0 - 23
    var m = date.getMinutes(); // between 0 - 59
    var s = date.getSeconds(); // between 0 - 59
    var session = "AM"; //variable 'session' will store the AM and PM tag
    
    if(h == 0){
        h = 12; //because getHours returns values between 0-23 and we are programming a 12 hours clock, we use this to reset 12 to 0
    } 
    
    if(h > 12){ //we subtract hours greater than 12 and assign the value of the session variable to 'PM'
        h = h - 12;
        session = "PM";
    }
    
    //using ternary operators to add zeros in front of the numbers to display the values as double digits
    //syntax is (condition? if true : if false)
    h = (h < 10) ? "0" + h : h; //we add a 0 in front if h < 10, otherwise no zero
    m = (m < 10) ? "0" + m : m; //we add a 0 in front if m < 10, otherwise no zero
    s = (s < 10) ? "0" + s : s; //we add a 0 in front if s < 10, otherwise no zero
    

    //the variable time is used to store the time in the desired format, with AM/PM session at the end
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time; //returns the element whose ID has been passed
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000); //using this method to update the static date() so it keeps our clock running
    
}

showTime(); //running the function