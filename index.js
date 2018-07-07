$(document).ready(function() {
  var fs = require('fs');

document.getElementById("apps").innerHTML = '';
apps = fs.readdirSync("Apps/");
for (i = 0; i < apps.length; i++) {
  if(apps[i] != ".DS_Store"){
  app = fs.readFileSync("Apps/" + apps[i] + "/Admin/app.json");
  oapp = JSON.parse(app);
    document.getElementById("apps").innerHTML += '<div class="card text-white" style="background-color: #D98911;"><div class="card-body"><h4 class="card-title">' + oapp.title + '</h4><a class="btn btn-primary" href="Apps/' + apps[i] + '/index.html" target="_blank"><b>Open</b></a></div></div>';
  }
}
});
