function updateBackground() {
  getImageList(function (backgrounds) {
    var rb = Math.floor(Math.random() * (backgrounds.length));
    randomImageURL = `url('images/${backgrounds[rb]}')`;
    gradient = "radial-gradient(circle, rgba(0,84,168,0.5) 0%, rgba(4,35,63,1) 100%, rgba(0,43,117,0.75) 100%)";
    background = `${gradient}, ${randomImageURL}`;
    document.body.style.backgroundImage = background;
  });
}

function getImageList(callback) {
  chrome.runtime.getPackageDirectoryEntry(function(root) {
    root.getDirectory("images", {create: false}, function(localesdir) {
      var reader = localesdir.createReader();
      // Assumes that there are fewer than 100 locales; otherwise see DirectoryReader docs
      reader.readEntries(function(results) {
        callback(results.map(function(de){return de.name;}).sort());
      });
    });
  });
}
