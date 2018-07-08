$(document).ready(function() {
  var fs = require('fs');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("app");
  var page = url.searchParams.get("page");
  document.getElementById("path").innerHTML = id + "/" + page;
  bob = fs.readFileSync("Apps/" + id + "/" + page);
  document.getElementById("con").innerHTML = bob;
  function linkFunction(){
    window.location.assign('dir.html?app=' + id);
  }
//CodeMirror
var myCodeMirror = CodeMirror.fromTextArea(con, {
lineNumbers: true,
  mode:  "javascript",
  theme: "abcdef",
matchBrackets: true,
matchTags: {bothTags: true},
lineWrapping: true,
foldGutter: true,
gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
lint: true,
extraKeys: {"Ctrl-Space": "autocomplete",
"F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        },
"Ctrl-J": "toMatchingTag"
}
});
});
