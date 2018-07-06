$(document).ready(function() {
  var fs = require('fs');

document.getElementById("con").innerHTML = "";
bob = fs.readdirSync("Apps/Connect/user_data/");
var con = '';
for (i = 0; i < bob.length; i++) {
  if(bob[i] != ".DS_Store"){
  bill = fs.readFileSync("Apps/Connect/user_data/" + bob[i]);
  h = JSON.parse(bill);
    //document.getElementById("con").innerHTML += '<a href="login.html?id=' + bob[i] +'">' + h.title + '</a><br>';
    document.getElementById("con").innerHTML += '<tr><td><b>' + h.title + '</b></td><td><a class="btn btn-success" href="login.html?id=' + bob[i] +'">Connect</a></td><td><a href="delete.html?id=' + bob[i] + '" class="btn btn-danger">Delete</a></td></tr>';
  }
}
  $("#save").click(function(){
    var title = document.getElementById('title').value;
    var server = document.getElementById('server').value;
    var user = document.getElementById('user').value;
    var obj = { "title":title, "server":server, "user":user};
    var myJSON = JSON.stringify(obj);
    var stamp = Math.floor(Date.now() / 1000);
    var myFILE = 'user_data/' + stamp + '.json';
    fs.writeFile(myFILE, myJSON, function (err) {
      if (err) throw err;
        console.log('Saved!');
      });
      location.reload();
  });

});
