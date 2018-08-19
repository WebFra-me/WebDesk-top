$(document).ready(function() {
  var fs = require('fs');
  const wd_homedir = require('os').homedir();
  var wd_dir = wd_homedir + '/WebDesk-top/';
  var wd_url_string = window.location.href;
  var wd_url = new URL(wd_url_string);
  var wd_app = wd_url.searchParams.get("wd_app");
  var wd_sec = wd_url.searchParams.get("wd_sec");
  var wd_css = "";
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/css_' + wd_sec + '.json')) {
    var wd_obj = JSON.parse(fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/css_' + wd_sec + '.json'));
    for (i in wd_obj.css) {
      var wd_css = wd_css + fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/' + wd_obj.css[i]) + " ";
    }
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/css.json')) {
    var wd_obj = JSON.parse(fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/css.json'));
    for (i in wd_obj.css) {
      var wd_css = wd_css + fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/' + wd_obj.css[i]) + " ";
    }
  }
  else{
    var wd_css = "";
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/head_' + wd_sec + '.html')) {
    var wd_head = "<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>" + fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/head_' + wd_sec + '.html') + '<style>' + wd_css + '</style><script>if (window.module) module = window.module;</script>';
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/head.html')) {
    var wd_head = "<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>" + fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/head.html') + '<style>' + wd_css + '</style><script>if (window.module) module = window.module;</script>';
  }
  else{
    var script = document.createElement('script');
    script.src = "Plugins/bootstrap/dist/js/bootstrap.min.js";
    document.body.appendChild(script);
    //var wd_test = __dirname + "/Plugins/bootstrap/dist/js/bootstrap.min.js";
    //require(wd_test);
    var wd_head = '<title>WebDesk-top</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="Plugins/bootstrap/dist/css/bootstrap.min.css"><link rel="stylesheet" href="style.css"><style>' + wd_css + '</style>';
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/banner_' + wd_sec + '.html')) {
    var wd_banner = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/banner_' + wd_sec + '.html');
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/banner.html')) {
    var wd_banner = fs.readFileSync(wd_dir + 'Apps/' + wd_app +'/banner.html');
  }
  else{
    var wd_banner = '<div class="jumbotron"><h1>' + wd_app + '</h1></div>';
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.html')) {
    var wd_body = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.html');
  }
  else{
    var wd_body = '<h1>404</h1><h3>Page not found.</h3><h4><a class="btn btn-primary" href="#" onclick="window.history.go(-1); return false;">Go Back</a></h4>';
  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/script_' + wd_sec + '.json')) {
    var wd_obj = JSON.parse(fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/script_' + wd_sec + '.json'));
    for (i in wd_obj.script) {
      if (fs.existsSync(wd_dir + 'Apps/' + wd_app + "/" + wd_obj.script[i])) {
        require(wd_dir + 'Apps/' + wd_app + "/" + wd_obj.script[i]);
      }
    }
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/script.json')) {
    var wd_obj = JSON.parse(fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/script.json'));
    for (i in wd_obj.script) {
      if (fs.existsSync(wd_dir + 'Apps/' + wd_app + "/" + wd_obj.script[i])) {
        require(wd_dir + 'Apps/' + wd_app + "/" + wd_obj.script[i]);
      }
    }
  }
  else{

  }
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/foot_' + wd_sec + '.html')) {
    var wd_foot = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/foot_' + wd_sec + '.html');
  }
  else if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/foot.html')) {
    var wd_foot = fs.readFileSync(wd_dir + 'Apps/' + wd_app + '/foot.html');
  }
  else{
    var wd_foot = '';
  }
  document.getElementById("wd_head").innerHTML = wd_head;
  document.getElementById("wd_banner").innerHTML = wd_banner;
  document.getElementById("wd_body").innerHTML = wd_body;
  document.getElementById("wd_foot").innerHTML = wd_foot;
  if (fs.existsSync(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.js')) {
    require(wd_dir + 'Apps/' + wd_app + '/codemirror-5.39.0/lib/codemirror.js');
    require(wd_dir + 'Apps/' + wd_app + '/' + wd_sec + '.js');
  }
});
