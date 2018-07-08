$(document).ready(function() {
  var fs = require('fs');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("app");
  document.getElementById("path").innerHTML = id;
document.getElementById("apps").innerHTML = '';
apps = fs.readdirSync("./Apps/" + id + "/");
for (i = 0; i < apps.length; i++) {
  if(apps[i] != ".DS_Store"){
    document.getElementById("apps").innerHTML += '<div class="card"><div class="card-body"><h4 class="card-title">' + apps[i] + '</h4><a class="btn btn-primary" href="page.html?app=' + id + '&page=' + apps[i] + '"><b>Open</b></a></div></div>';
  }
}
$("#nf1").click(function(){
  var filen = document.getElementById("napp").value;
  var dir = "./Apps/" + id + "/" + filen;
  if (!fs.existsSync(dir)){
    fs.writeFile(dir, '', function (err) {
      if (err) throw err;
        console.log('Saved!');
      });
      window.location.assign('page.html?app=' + id + '&page=' + filen);
  }
  else{
    window.alert("This App Already Exists");
  }
});
});
