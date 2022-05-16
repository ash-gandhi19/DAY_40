const http=require("http");
const fs=require('fs');
const PORT=8000; 

let today = new Date();

let filename = today.getFullYear() +"_" + (today.getMonth()+1) +"_"+today.getDate() +'_' + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();

let filedata = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

fs.writeFileSync(filename +'.txt',"Current Timestamp is " + filedata);

http.createServer((req, res)=>{
    fs.readFile(filename +'.txt',(err,data)=>{
        res.writeHeader(200,{"content-type":"text/html"})
        res.write(data);
        res.end();
    })

}).listen(PORT,()=>{
    console.log("listning to port", PORT);
})
