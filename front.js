$(document).ready(function() {
  var fs = require('fs');
  const wd_homedir = require('os').homedir();
  var wd_dir = wd_homedir + '/WebDesk-top/';
  var wd_url_string = window.location.href;
  var wd_url = new URL(wd_url_string);
  var wd_app = wd_url.searchParams.get("wd_app");
  var wd_sec = wd_url.searchParams.get("wd_sec");
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/head_' + wd_sec + '.html')) {
    var wd_head = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/head_' + wd_sec + '.html');
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/head.html')) {
    var wd_head = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/head.html');
  }
  else{
    var wd_head = '<title>WebDesk-top</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="Plugins/bootstrap/dist/css/bootstrap.min.css"><link rel="stylesheet" href="style.css">';
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.html')) {
    var wd_body = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.html');
  }
  else{
    var wd_body = '<h1>404</h1><h3>Page not found.</h3>';
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/foot_' + wd_sec + '.html')) {
    var wd_foot = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/foot_' + wd_sec + '.html');
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/foot.html')) {
    var wd_foot = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/foot.html');
  }
  else{
    var wd_foot = '<script src="Plugins/bootstrap/dist/js/bootstrap.min.js"></script>';
  }
  document.getElementById("wd_head").innerHTML = wd_head;
  document.getElementById("wd_body").innerHTML = wd_body;
  document.getElementById("wd_foot").innerHTML = wd_foot;
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.js')) {
    require(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.js');
  }
});
