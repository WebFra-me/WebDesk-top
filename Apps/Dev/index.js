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
$("#nf1").click(function(){
  var filen = document.getElementById("napp").value;
  var dir = "./Apps/" + filen;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    fs.mkdirSync(dir + '/Admin');
    fs.writeFile(dir + '/Admin/app.json', '{"title":"' + filen + '"}', function (err) {
      if (err) throw err;
        console.log('Saved!');
      });
    fs.writeFile(dir + '/index.html', '', function (err) {
      if (err) throw err;
        console.log('Saved!');
      });
      window.location.assign('page.html?app=' + filen + '&page=index.html');
  }
  else{
    window.alert("This App Already Exists");
  }
});
});
