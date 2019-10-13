/*
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });
  */

  var contextMenusItem={
      "id":"demo",
      "title":"demo",
      "contexts":["selection"]
  }
  chrome.contextMenus.create(contextMenusItem);

  chrome.contextMenus.onClicked.addListener(function(clickdata){
    if(clickdata.menuItemId=="demo" && clickdata.selectionText){
      alert(clickdata.selectionText);
    }
  });