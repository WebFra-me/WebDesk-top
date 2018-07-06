$( document ).ready(function() {
  var fs = require('fs');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  bob = fs.readFileSync("Apps/Connect/user_data/" + id);
  h = JSON.parse(bob);
  document.getElementById("user").value = h.user;
  document.getElementById("LogForm").action = h.server + "/login.php";
  document.getElementById("heading").innerHTML = "Login to " + h.title;
});
