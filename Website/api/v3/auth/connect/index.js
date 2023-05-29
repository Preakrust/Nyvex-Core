// Dependencies //

var SimpleNotifyScript = document.createElement('script');
var SimpleNotifyCSS = document.createElement("link");

SimpleNotifyCSS.rel = "stylesheet";

SimpleNotifyCSS.setAttribute('href', "https://cdn.jsdelivr.net/npm/simple-notify@0.5.5/dist/simple-notify.min.css");
SimpleNotifyScript.setAttribute('src', "https://cdn.jsdelivr.net/npm/simple-notify@0.5.5/dist/simple-notify.min.js");

SimpleNotifyScript.onload = function() {
  startWidget();
};

document.head.appendChild(SimpleNotifyScript);
document.head.appendChild(SimpleNotifyCSS);

// Main code //

let myNotify;

function startWidget() {
  myNotify = new Notify({
    status: 'success',
    title: 'This website supports Nyvex-Core Connect!',
    text: '<button style="background-color: #23589f;border-color: transparent;color: white;border-radius: 5px;">Continue with Nyvex-Core</button>',
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: false,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: 'right top'
  });
}
