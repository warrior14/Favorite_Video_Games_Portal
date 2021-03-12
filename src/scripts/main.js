// fetch('http://localhost:8088/videoGames').then(response =>  response.json()).then(videGamesData => {
//     console.log('data', data);
// })


// apiManager.getVideoGames().then(videoGamesData => {
//     console.log(videoGamesData);
// });

// apiManager.getUsers().then(usersData => {
//     console.log(usersData);
// });

// apiManager.getGenres().then(genresData => {
//     console.log(genresData);
// });

import ApiManager from "./apiManager.js";
let apiManager = new ApiManager();
import ElementFactory from "./elementFactory.js";
let parentElementName = document.getElementById('play');

let videoGamesDataPromiseArray = new Array();
let usersDataPromiseArray = new Array();
let genresDataPromiseArray = new Array();

let getDataFromApis = () => {
    videoGamesDataPromiseArray.push(apiManager.getVideoGames());
    usersDataPromiseArray.push(apiManager.getUsers());
    genresDataPromiseArray.push(apiManager.getGenres());
};

let initialize = new Promise((resolve, reject) => {
    resolve(getDataFromApis());
});


initialize.then(() => {
    console.log("Video Games Data", videoGamesDataPromiseArray[0]);
    console.log("Users Data", usersDataPromiseArray[0]);
    console.log("Genres Data", genresDataPromiseArray[0]);
});

    videoGamesDataPromiseArray[0].then(videoGamesData => {
        console.log("Video Games Data", videoGamesData);
    });

    usersDataPromiseArray[0].then(usersData => {
        console.log("Users Data", usersData);
    });

    genresDataPromiseArray[0].then(genresData => {
        console.log("Genres Data", genresData);

    let createElement = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, elementInnerText, parentElementName) => {
        try {
            let newElement = new ElementFactory(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, elementInnerText, parentElementName);
            newElement.createIt();
            newElement.addFirstAttribute();
            newElement.addSecondAttribute();
            newElement.addInnerText();
            newElement.appendToParentElement();
        } catch {
            console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, elementInnerText: ${elementInnerText}, parentElementName: ${parentElementName}`);
            alert(e);
        }; 
    };
});



