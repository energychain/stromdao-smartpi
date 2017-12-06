
var fs = require("fs");
var StromDAONodeConsumer = require("stromdao-businessobject");
var StromDAONodeProducer = require("stromdao-businessobject");
var external_id_in="SmartPI - Consumer";

var my_reading_in=Math.round(fs.readFileSync("/var/smartpi/consumecounter").toString()*1000);
var cli = require("stromdao-bo-mpo");

console.log(cli);


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

