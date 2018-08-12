$(document).ready(function() {
  var fs = require('fs');
  const {shell} = require('electron');
  const wd_homedir = require('os').homedir();
  var wd_dir = wd_homedir + '/WebDesk-top/';
  if (!fs.existsSync(wd_dir)) {
    fs.mkdirSync(wd_dir);
  }
  if (!fs.existsSync(wd_dir + 'Apps/')) {
    fs.mkdirSync(wd_dir + 'Apps/');
  }
  if (!fs.existsSync(wd_dir + 'Docs/')) {
    fs.mkdirSync(wd_dir + 'Docs/');
  }
  if (!fs.existsSync(wd_dir + 'Admin/')) {
    fs.mkdirSync(wd_dir + 'Admin/');
  }
  //shell.writeShortcutLink(wd_homedir + '/Documents/');
document.getElementById("apps").innerHTML = '';
apps = fs.readdirSync(wd_dir + 'Apps/');
for (i = 0; i < apps.length; i++) {
    if (fs.existsSync(wd_dir + 'Apps/' + apps[i] + "/Admin/app.json")) {
      app = fs.readFileSync(wd_dir + 'Apps/' + apps[i] + "/Admin/app.json");
      oapp = JSON.parse(app);
      document.getElementById("apps").innerHTML += '<div class="card"><div class="card-body"><h4 class="card-title">' + oapp.title + '</h4><a class="btn btn-primary" href="layout.html?wd_app=' + apps[i] + '&wd_sec=index" target="_blank"><b>Open</b></a></div></div>';
    }
}
$("#wd_dir").click(function(){
  shell.openItem(wd_dir);
});
});
