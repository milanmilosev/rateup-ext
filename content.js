// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
  
    // history endpoints
    let youtube = document.querySelectorAll('ytd-item-section-renderer button#button.style-scope.yt-icon-button');
    let facebook = document.querySelectorAll('td .uiPopover a');
    let b92 = document.querySelectorAll('.rate-up');
    let twitter = document.querySelectorAll('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite');

    // making click event
    var simulateClick = function(e) {
      var myEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
      });
      var canceled = !e.dispatchEvent(myEvent);
    }
    
    // mark all element for removing
    function getAllElements(channel) {
      for(let i = 0; i <= channel.length; ++i) {
        setTimeout(()=>{
          setDelay(i);
          if(i === channel.length){ 
              console.log('Zavrseno');
          }
        },i * 1000); // multiple i by 1000
      }
    }
    
    // Promise
    function setDelay(i) {
        simulateClick(b92[i])
        console.info(`lajkovano: ${i}`);
        chrome.runtime.sendMessage({"message": "showResults", "results": i});
    }

    // call function
    getAllElements(b92);
    }
  }
);


