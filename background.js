chrome.runtime.onMessage.addListener((data) => {
  console.log("get message from content");
  if (data.type === "basic") {
    console.log(data.options);
    chrome.notifications.create("", data);
    console.log("message created");
  }
});
