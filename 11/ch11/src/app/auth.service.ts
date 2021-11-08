export class AuthService {
    loggedIn=false;
    userNameis='';
    isAuthenticated() {
        const promise =new Promise(
        (resolve,reject) =>{
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 1);
        }
        );
        return promise;
    }
    login() {
        this.loggedIn=true;
    }

    logout() {
        this.loggedIn=false ;
    }
    get userName(): string {
        return this.userNameis;
      }
}