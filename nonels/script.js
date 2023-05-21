// Loading Screen - Made by Nick S. - Copyright (c) 2022 //

// Configure Me!

// How many backgrounds are you cycling through?
// This should be a whole integer.
// You should have image files numbered 1-# relative to your amount of images.
const BackgroundCount = 14.0;

// The relative path to your images.
const BackgroundPath = "img/";

// Consistent file type for your images
const BackgroundExtension = ".webp";
const BackgroundHoldLength = 6.0;
const BackgroundFade = true;
const BackgroundFadeLength = 3.0;
const UseServerProvidedInfo = false; // nah laddy
const ServerName = "Benji's Downtown";
const ServerSubName = "Non-Serious DarkRP";
const MiscMessages = [
    '<b>TIP: </b> <i> Lost on the map? </i> you can access waypoints using [F1].',
    '<b>TIP: </b> <i> Looking for gangs? </i> Check out gang menu with [F8].',
    '<b>TIP: </b> <i> Low on cash? </i> City worker is a great start.',
    '<b>TIP: </b> <i> Low on cash? </i> Start clearing up downtown by cutting down trees ',
	'Holy shit!!! a good dark rp server? idk maybe',
    'oskar ( STEAM_0:0:498887884 ) ( Citizen ) : this server is shit',
	'<b>TIP: </b> Our finest work comes from the suggestions you make. ',
    'Wanna contribute to loading screen? Post in-game screenshots on our discord.'
];

// Advanced Configuration - Not recommended to edit.
// If you edit you risk breaking your template.

const BackgroundElementId = "bg-image";

// End of configuration!

// Do not edit further //

for (let i = 0; i < BackgroundCount; i++) {
    new Image().src = BackgroundPath + (i + 1).toString() + BackgroundExtension;
}

const setupArray = (maxCount) => {
    let Arr = [];
    for (let i = 0; i < maxCount; i++) {
        Arr[i] = i + 1;
    }
    return Arr;
}
var availableBackgrounds = setupArray(BackgroundCount);

const BackgroundElement = () => {
    let elem = document.getElementById(BackgroundElementId);
    if (elem)
        return elem
}

const ServerNameElement = () => {
    let elem = document.getElementById("servername");
    if (elem)
        return elem;
}

const SubTitleElement = () => {
    let elem = document.getElementById("serversubname");
    if (elem)
        return elem;
}

const MiscMessageElement = () => {
    let elem = document.getElementById("miscmessage");
    if (elem)
        return elem;
}

const SetBackgroundByURL = (url) => {
    let bElem = BackgroundElement();
    bElem.style.background = " url(" + url + ")";
    bElem.style.backgroundSize = "cover";
    bElem.style.transition = "background " + BackgroundFadeLength.toString() + "s";
}

var availableMessages = [...MiscMessages];

const RandomMessage = () => {
	if (availableMessages.length === 0) 
		availableMessages = [...MiscMessages];
		
	let x = availableMessages[Math.floor(Math.random() * availableMessages.length)];
	let k = availableMessages.indexOf(x);
	availableMessages.splice(k, 1);
	return x;
	
};

var serverName = "Loading...";
var serverSubName = "Loading...";

const update = () => {
    if (availableBackgrounds.length == 0)
        availableBackgrounds = setupArray();

    ServerNameElement().innerHTML  = UseServerProvidedInfo ? serverName : ServerName;
    SubTitleElement().innerHTML    = UseServerProvidedInfo ? serverSubName : ServerSubName;
	MiscMessageElement().innerHTML = RandomMessage();
	
    let x = availableBackgrounds[Math.floor(Math.random() * availableBackgrounds.length)];
    let k = availableBackgrounds.indexOf(x);
    availableBackgrounds.splice(k, 1);
    
    SetBackgroundByURL(BackgroundPath + x.toString() + BackgroundExtension);
    setTimeout(() => {
        update()
    }, BackgroundHoldLength * 1000);
};

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
    ServerNameElement().innerHTML = UseServerProvidedInfo ? servername : ServerName;
    SubTitleElement().innerHTML = UseServerProvidedInfo ? gamemode : ServerSubName;
}

update();
