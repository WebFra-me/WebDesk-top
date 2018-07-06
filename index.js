$(document).ready(function() {
  var fs = require('fs');

document.getElementById("apps").innerHTML = "";
apps = fs.readdirSync("Apps/");
for (i = 0; i < apps.length; i++) {
  if(apps[i] != ".DS_Store"){
  app = fs.readFileSync("Apps/" + apps[i] + "/Admin/app.json");
  oapp = JSON.parse(app);
    document.getElementById("apps").innerHTML += '<a style="float: left;" href="Apps/' + apps[i] + '/index.html" target="_blank">' + oapp.title + '</a> ';
  }
}
});
