let logInPageDiv = document.getElementById('loginPage');
let homePageDiv = document.getElementById('homePage');

export default class LogInManager {
    constructor() {}
    
    checkIfAuthenticated(usersDataPromiseArray) {
        usersDataPromiseArray[0].then(usersDataArray => {
            for (let i = 0; i < userDataArray.length; i++) {
                if (sessionStorage.getItem('username') === userDataArray[i].username) {
                    this.redirectToHomePage();
                    break;
                } else {

                };

            };    
            
            
        });

    };

    authenticate(usersDataPromiseArray, username, password) {
        usersDataPromise[0].then(userDataArray => {
            for (let i= 0; i < userDataArray.length; i++ ) {
                if(username === userDataArray[i].username && password === userDataArray[i].password) {
                    this.redirectToHomePage();
                    sessionStorage.setItem('username', userDataArray[i].usernmae);
                    sessionStorage.setItem('password', userDataArray[i].password);
                    break;
                } else {
                    console.log(usermame, userDataArray[i].username, passeword, userDataArray[i].password);
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
};








}
    