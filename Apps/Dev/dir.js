$(document).ready(function() {
  var fs = require('fs');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("app");
document.getElementById("apps").innerHTML = '';
apps = fs.readdirSync("./Apps/" + id + "/");
for (i = 0; i < apps.length; i++) {
  if(apps[i] != ".DS_Store"){
  //app = fs.readFileSync("./Apps/" + id + "/" + apps[i] + "/Admin/app.json");
  //oapp = JSON.parse(app);
    document.getElementById("apps").innerHTML += '<div class="card"><div class="card-body"><h4 class="card-title">' + apps[i] + '</h4><a class="btn btn-primary" href="page.html?app=' + id + '&page=' + apps[i] + '"><b>Open</b></a></div></div>';
  }
}
});
