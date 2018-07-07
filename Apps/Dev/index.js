$(document).ready(function() {
  var fs = require('fs');
document.getElementById("apps").innerHTML = '';
apps = fs.readdirSync("./Apps/");
for (i = 0; i < apps.length; i++) {
  if(apps[i] != ".DS_Store"){
  app = fs.readFileSync("./Apps/" + apps[i] + "/Admin/app.json");
  oapp = JSON.parse(app);
    document.getElementById("apps").innerHTML += '<div class="card"><div class="card-body"><h4 class="card-title">' + oapp.title + '</h4><a class="btn btn-primary" href="dir.html?app=' + apps[i] + '"><b>Open</b></a></div></div>';
  }
}
});
