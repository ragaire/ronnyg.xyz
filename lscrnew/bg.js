
const BackgroundCount = 23;
const BackgroundPath = "img/";
const BackgroundExtension = ".webp";
const BackgroundHoldLength = 6.0;
const BackgroundFade = true;
const BackgroundFadeLength = 3.0;
const BackgroundElementId = "bg-image";


for (let i = 0; i < BackgroundCount; i++) {
  new Image().src = BackgroundPath + (i + 1).toString() + BackgroundExtension;
}

const setupArray = (maxCount) => {
  let Arr = [];
  for (let i = 0; i < maxCount; i++) {
    Arr[i] = i + 1;
  }
  return Arr;
};
var availableBackgrounds = setupArray(BackgroundCount);

const BackgroundElement = () => {
  let elem = document.getElementById(BackgroundElementId);
  if (elem) return elem;
};

const SetBackgroundByURL = (url) => {
  let bElem = BackgroundElement();
  bElem.style.background = " url(" + url + ")";
  bElem.style.backgroundSize = "cover";
  bElem.style.transition = "background " + BackgroundFadeLength.toString() + "s";
};

const update = () => {
  let x = availableBackgrounds[Math.floor(Math.random() * availableBackgrounds.length)];
  let k = availableBackgrounds.indexOf(x);
  availableBackgrounds.splice(k, 1);

  SetBackgroundByURL(BackgroundPath + x.toString() + BackgroundExtension);
  setTimeout(update, BackgroundHoldLength * 1000);
};

update();
