// background.js
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('like');
  button.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });
});


// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "showResults" ) {
      document.getElementById('results').textContent = `Liked: ${request.results}` ;
    }
  }
);
