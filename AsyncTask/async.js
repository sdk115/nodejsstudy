var fs = require('fs');
var data = fs.readFile( 'data.txt', {encoding:'utf8'}, (err,data)=>{
  if(err) throw err;
  console.log(data);
} );
