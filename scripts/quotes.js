var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

// save quotes to localStorage once per browser session
localQuotes = localStorage.getItem('quotes');
if (!localQuotes || typeof localQuotes === 'undefined') {
  // console.log('local storage empty, populating');

  try {
    getJSON('https://chruomo.github.io/chruomo/quotes.json',
    function(err, data) {
      if (err === null) {
        localStorage.setItem('quotes', JSON.stringify(data));
      } else {
        console.log("error reading from url: ", err)
      }
    });
  }
  catch (e) {}
}

// load quotes from localStorage or disk, then call applyQuote()
function updateQuote() {
  localQuotes = localStorage.getItem('quotes');
  if (localQuotes && typeof localQuotes !== 'undefined') {
    quotes = JSON.parse(localQuotes).quotes;
    applyQuote(quotes);
  } else {
    chrome.runtime.getPackageDirectoryEntry(function(root) {
      root.getFile("docs/quotes.json", {}, function(fileEntry) {
        fileEntry.file(function(file) {
          var reader = new FileReader();
          reader.onloadend = function(e) {
            quotes = JSON.parse(this.result).quotes;
            applyQuote(quotes);
          };
          reader.readAsText(file);
        }, errorHandler);
      }, errorHandler);
    });

  }
}

function applyQuote(quotes) {
  quoteDiv = document.getElementById("quote");
  var rq = Math.floor(Math.random() * (quotes.length));
  quoteDiv.innerHTML = formatQuote(quotes[rq]);
  resizeFont(quoteDiv, quotes[rq])
}

function formatQuote(quote) {
  formattedQuote = quote.replace(/"/g, '<span class="yellow">"</span>');
  formattedQuote = formattedQuote.replace(/“/g, '<span class="yellow">“</span>');
  formattedQuote = formattedQuote.replace(/”/g, '<span class="yellow">”</span>');
  return formattedQuote;
}

function resizeFont(element, text) {
  newSize = 120 - (2 ** (text.length/35))
  element.style.fontSize = `${newSize}px`;
}

function updateQuarantineDayCounter() {
  quarantineDayCounterDiv = document.getElementById("quarantineDayCounter");
  if (quarantineDayCounterDiv != null) {
    var millisecondsInDay = 24 * 60 * 60 * 1000;
    var today = new Date();
    let startDate = new Date(2020, 2, 0);
    quarantineDayCounterDiv.innerHTML = ~~((today - startDate)/millisecondsInDay);
  };
}

function errorHandler() {}