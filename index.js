var fs = require("fs");
const http_request=require("request");
var external_id_in="SmartPI - Consumer";

var my_reading_in=Math.round(fs.readFileSync("/var/smartpi/consumecounter").toString()*1000);
var my_reading_out=Math.round(fs.readFileSync("/var/smartpi/prosumercounter").toString()*1000);

http_request("https://api.corrently.io/core/iot?account=0xF0d4282c189C8c40C80dcCcACB9F6d69f46E1B7e&secret=smartpi&value="+my_reading_in,function(r,e,b) {
  console.log(b);
});
http_request("https://api.corrently.io/core/iot?account=0x21a9040D67D60a11BD3F4843e85bBCC10Fa52Dd9&secret=smartpi&value="+my_reading_in,function(r,e,b) {
  console.log(b);
});
/*
function doOut() {
var external_id_out="SmartPI - Producer";

var my_reading_out=Math.round(fs.readFileSync("/var/smartpi/producecounter").toString()*1000);
console.log(my_reading_out);

var node_out = new StromDAONodeProducer.Node({external_id:external_id_out,testMode:true});

node_out.mpr().then( function(mpr) {
    mpr.storeReading(my_reading_out).then( function(tx_result) {
     console.log(external_id_out,node_out.wallet.address,my_reading_out,tx_result);
    });
});
}
*/
