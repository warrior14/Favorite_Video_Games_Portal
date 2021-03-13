export default class ApiManager {
    constructor() {
    };
    
    getVideoGames() {
        try {
            return fetch('http://localhost:8088/videoGames').then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };
    getUsers() {
        try {
            return fetch('http://localhost:8088/users').then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };
    getGenres() {
        try {
            return fetch("http://localhost:8088/genres").then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };
    addVideoGames(newVideoGame) {
        try {
            return fetch("http://localhost:8088/videoGames", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newVideoGame)
            }).then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };
};


