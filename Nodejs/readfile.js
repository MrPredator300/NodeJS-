var fs = require("fs")

fs.writeFile(`cal1.js`,`console.log("done")`,function(err) {                    //This Line is actually creating a file cal1.js 
    console.log("Data Saved")
})

/*
fs.readFile("cal.js","utf8",function(err,data){
    console.log(data)
})
*/