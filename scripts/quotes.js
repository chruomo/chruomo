var quotes= [
  "Trump will have no fight with me.",
  "State governments possess inherent advantages.",
  "We are asking you to stay home - it's How You Save A Life.",
  "We make decisions based on data.",
  "We have the playbook:<br>Test - Trace - Isolate.",
  "We are building an army of tracers.",
  "We can meet this challenge.",
  "This is an extraordinary effort and requires us all to work together.",
  "This is a self-portrait of the goodness of Americans.",
  "Let's talk about priorities.",
  "We must make reopening decisions based on fact.",
  "We have come up with factual, data-driven principles to guide us on reopening.",
  "We endured the pain.",
  "Let’s benefit from the gain.",
  "Build back better",
  "When does change come to a society? ... You get moments in history where people say “okay I’m ready, I’m ready for change, I get it,” I think this is one of those moments.",
  "How much is a human life worth?<br>I say a human life is priceless",
  "Let’s be factual, productive and united.",
  'It’s NOT “you” or “me” it’s “WE”',
  "NO RED & BLUE<br><span class='yellow'>RED, WHITE, & BLUE</span>",
  "?<br><br>?&nbsp;&nbsp;&nbsp; <span class='yellow'>REOPEN</span>&nbsp;&nbsp;&nbsp; ?<br><br>?",
  "?<br><br>?&nbsp;&nbsp;&nbsp; <span class='yellow'>REOPENING</span>&nbsp;&nbsp;&nbsp; ?<br><br>?",
  "“I can't do this anymore”",
  "The horse had already<br><span class='yellow'>left the barn</span>.",
  "BUT WE<br><span class='yellow'>CAN'T BE STUPID</span>",
  "BLAME <span class='yellow'>ME</span>",
  "We will get to the other side of the mountain...",
  "OUR ACTIONS<br><span class='yellow'>SHAPE OUR FUTURE</span>",
  "We are going to make it through!",
  "We are going to make it through!<br>We are going to be okay!<br><span class='yellow'>STRENGTH &nbsp;&nbsp STAMINA &nbsp;&nbsp STABILITY</span>",
  "Our closeness is what makes us:<br><span class='yellow'>Special<br>Connected<br>Human</span>",
  "If you can test, you can find positives.<br><span class='yellow'>Then trace. </span>Then isolate.",
  "I know it's been frustrating.<br>It's been <span class='yellow' id='quarantineDayCounter'>37</span><span class='yellow'> days</span>.",
  "It's <span class='yellow'>math</span>.",
  "Today is another day<br><span class='yellow'>to do better</span>.",
  "Federal representatives said<br>“Don't worry.”<br><span class='yellow'>I'm worried.</span>",
  "<span class='yellow'>I say:</span><br>”I think about what I know.”",
  "NO BAILOUT<br><span class='yellow'>BOONDOGGLES</span>",
  "...even a Governor can do it.",
  "”Socially distanced<br>spiritually connected”",
  "When the pressure is on<br>you see what people<br><span class='yellow'>are really made of</span><br><br>BEST ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ WORST",
]

function updateQuote() {
  console.log(quotes);
}

function updateQuote() {
  getJSON('https://chruomo.github.io/chruomo/docs/quotes.json',
  function(err, data) {
    if (err === null) {
      quotes = data.quotes
    }
    var rq = Math.floor(Math.random() * (quotes.length));
    quoteDiv = document.getElementById("quote");
    quoteDiv.innerHTML = formatQuote(quotes[rq]);
    resizeFont(quoteDiv, quotes[rq])
  });
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