$.get("data/versions.txt", null, function(text){
    var versionsTextList = text.split(";\n");

    var versionsList = [];
    for (var verz in versionsList) {
      var pts = verz.split("|");

      var versi = {version:pts[0], url:pts[1], title:pts[2], kind:pts[3]};

      versionsList.push(versi);
    }

    var outHtml = "";

    for (var i = 0; i < versionsList.length; i++) {
      outHtml += "<li>Version <a href=\""+versionsList[i].url+"\">+"versionsList[i].version+"</a>: ";
      outHtml += versionsList[i].title+" |   "+versionsList[i].kind+"</li>\n";
    }

    document.getElementById("versions").innerHTML = outHtml;
}, "text");