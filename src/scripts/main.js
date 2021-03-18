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
import ElementFactory from "./elementFactory.js";
import LogInManager from "./loginManager.js";

let apiManager = new ApiManager();
let elementFactory = new ElementFactory();
let videoGamesDataPromiseArray = new Array();
let usersDataPromiseArray = new Array();
let genresDataPromiseArray = new Array();
let logInManager = new LogInManager();

// Home Page
let parentElementName = document.getElementById('play');
let addVideoGameButton = document.getElementById('addVideoGame');
let inputVideoGameName = document.getElementById('name');
let inputVideoGameGenre = document.getElementById('genre');
let inputVideoGameId = document.getElementById('videoGameIdInput');
let deleteVideoGameButton = document.getElementById('deleteVideoGame');
let editVideoGameButton = document.getElementById('editVideoGame');
let patchVideoGameButton = document.getElementById('patchVideoGame');
let newVideoGame = {};
let videoGameId;



// Log In Page
let userNameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let logInButton = document.getElementById('logInButton');
let username;
let password;


let getDataFromApis = () => {
    videoGamesDataPromiseArray.push(apiManager.getVideoGames());
    usersDataPromiseArray.push(apiManager.getUsers());
    genresDataPromiseArray.push(apiManager.getGenres());
};

let gettingDataFromApis = new Promise((resolve, reject) => {
    resolve(getDataFromApis());
});


let addEventListeners = () => {
    inputVideoGameName.addEventListener('change', updateValue);
    inputVideoGameGenre.addEventListener('change', updateValue);
    addVideoGameButton.addEventListener('click', clickOnAddVideoGame);
    inputVideoGameId.addEventListener('change', updateValue);
    deleteVideoGameButton.addEventListener('click', clickOnDeleteVideoGame);
    editVideoGameButton.addEventListener('click', clickOnEditVideoGame);
    patchVideoGameButton.addEventListener('click', clickOnPatchVideoGame);
    userNameInput.addEventListener('change', updateValue);
    passwordInput.addEventListener('change', updateValue);
    logInButton.addEventListener('click', () => { 
        logInManager.authenticate(usersDataPromiseArray, username, password);
    });
};

let updateValue = (event) => {
    if(event.target.id === 'videoGameIdInput') {
        videoGameId = event.target.value;
    } else if (event.target.id === 'name' || event.target.id === 'genre') {
        newVideoGame[event.target.id] = event.target.value; 
    } else if (event.target.id === 'username') {
        username = event.target.value;
        console.log(username);
    } else {
        password = event.target.value;
        console.log('password', password);
    }
}
let clickOnAddVideoGame = () => {
    apiManager.addVideoGames(newVideoGame).then(() => {
        location.reload();
    });
};


let clickOnEditVideoGame = () => {
    apiManager.editVideoGame(videoGameId, newVideoGame).then(() => {
        location.reload();
    });
};

let clickOnDeleteVideoGame = () => {
    apiManager.deleteVideoGames(videoGameId).then(() => {  
        location.reload();      
    });
};

let clickOnPatchVideoGame = () => {
    apiManager.patchVideoGame(videoGameId, newVideoGame).then(() => {
        location.reload(); 
    });
};

let initialize = new Promise((resolve, reject) => {
    gettingDataFromApis.then(() => {
        logInManager.checkIfAuthenticated(usersDataPromiseArray);
        addEventListeners();
    });
});


initialize.then(() => {
    console.log("Video Games Data", videoGamesDataPromiseArray[0]);
    console.log("Users Data", usersDataPromiseArray[0]);
    console.log("Genres Data", genresDataPromiseArray[0]);

    videoGamesDataPromiseArray[0].then(videoGamesData => {
        console.log("Video Games Data", videoGamesData);
        videoGamesData.forEach(videoGame => {
            elementFactory.createNewElement('p', 'id', 'videoGame', videoGame.name, parentElementName);
        });
    });

    usersDataPromiseArray[0].then(usersData => {
        console.log("Users Data", usersData);
        usersData.forEach(user => {
            elementFactory.createNewElement('p', 'id', 'users', user.userName, parentElementName);
        });
    });

    genresDataPromiseArray[0].then(genresData => {
        console.log("Genres Data", genresData);
        genresData.forEach(genre => {
            console.log('parentElement', parentElementName);
            elementFactory.createNewElement('p', 'id', 'genres', genre.name, parentElementName);
        }); 
    });

let newVideoGame = {
    "name": "Titan Quest",
    "genre": 2,
    };

    // apiManager.addVideoGames(newVideoGame);
});

