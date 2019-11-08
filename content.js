let initScript = () => {
    let list = document.querySelector('.e1lsc6vo5');
    if(list) {
        let items = list.querySelectorAll('.e15p5mol0');
        let link = items[0].querySelector('.e15p5mol1').getAttribute('href');
        window.location = link;
    } else {
        window.location = location;
    }
}
let byTicket = () => {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          let form = document.querySelector('.e2a8jjg3');
          let storage = window.localStorage;
          if(storage.getItem('hellFest')) {
              if(form) {
                  form.querySelector('.e1suhhn80').click();
              } else {
                  initScript();
              }
          } else {
              console.log('local storage empty')
          }
        }
      };
}
byTicket();
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            window.localStorage.setItem('hellFest', 1);
            initScript();
        }
    }
);