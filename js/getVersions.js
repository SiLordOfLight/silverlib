var listOut = document.getElementById('versions')

$.ajax({
  url : "data/versions.txt",
  dataType: "text",
  success : function (data) {
      processData(data);
  }
});

function processData(data) {
  versionList = data.split("\n");

  versionList.forEach(makeItem);
}

function makeItem(item) {
  var versi = item.split('|');

  var ne = {version:versi[0], url:versi[1], title:versi[2], kind:versi[3]};

  processVersion(ne);
}

function processVersion(item) {
    var row = listOut.insertRow(-1);

    var vCell = row.insertCell(0);
    var tCell = row.insertCell(1);
    var kCell = row.insertCell(2);

    vCell.id = "versionCell";
    tCell.id = "titleCell";
    vCell.id = "typeCell";

    vCell.innerHTML = `<a href="${item.url}">${item.version}</a>`;
    vCell.href = item.url
    tCell.innerHTML = item.title;
    kCell.innerHTML = item.kind;
}