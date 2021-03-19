let logInPageDiv = document.getElementById('logInPage');
let homePageDiv = document.getElementById('homePage');

export default class LogInManager {
    constructor() {}
    
    checkIfAuthenticated(usersDataPromiseArray) {
        usersDataPromiseArray[0].then(usersDataArray => {
            for (let i = 0; i < usersDataArray.length; i++) {
                if (sessionStorage.getItem('username') === usersDataArray[i].username) {
                    this.redirectToHomePage();
                    break;
                } else {

                };

            };    
            
            
        });

    };

    authenticate(usersDataPromiseArray, username, password) {
        usersDataPromiseArray[0].then(usersDataArray => {
            for (let i= 0; i < usersDataArray.length; i++ ) {
                if(username === usersDataArray[i].username && password === usersDataArray[i].password) {
                    this.redirectToHomePage();
                    sessionStorage.setItem('username', usersDataArray[i].username);
                    sessionStorage.setItem('password', usersDataArray[i].password);
                    break;
                } else {
                    console.log(username, usersDataArray[i].username, password, usersDataArray[i].password);
                    alert('The combination of user name and password you entered were not correct!');
                    break;

                };

            };
      
        });
      
    };

    redirectToHomePage() {
        logInPageDiv.setAttribute('hidden', '')
        homePageDiv.removeAttribute('hidden');
    };

    clickOnLogOut() {
        logInPageDiv.removeAttribute('hidden');
        homePageDiv.setAttribute('hidden', '');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
    };
};