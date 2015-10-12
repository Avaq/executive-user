var executiveUser = require('./index');
var assert = require('assert');

var uid = process.argv[2];
var gid = process.argv[3];

try{
  executiveUser(uid, gid);
}

catch(e){
  console.error(e.stack);
  process.exit(1);
}
