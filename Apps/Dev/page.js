$(document).ready(function() {
  var fs = require('fs');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("app");
  var page = url.searchParams.get("page");
  document.getElementById("path").innerHTML = id + "/" + page;
});
