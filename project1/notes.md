## Building authentication service with AppWrite

first store all the appwrite things in appwrite folder
and lets create auth.js and init it by

```js
import {Client, Account, ID } form "appwrite";

export class AuthService{}

export default AuthService;
```

now as we are exporting a class, when we use this in our frontend code we will have to create an object and only then we can use, so insted we will crreate the object here and then export that

```js
import {Client, Account, ID } form "appwrite";

export class AuthService{}

const authService = new AuthService();

export default authService;
```

so then inside the class we will add client and user

now while adding properites we first add cliend and create client and after that we have to set enpoint and
project id and only then we can create the account so we will add a constructor which will make sure that the endpoint and project id is set before creating the account

```js
import {Client, Account, ID } form "appwrite";

export class AuthService{
      const client = new Client();
      account;
      
      consturctor() {
              this.client
                  .setEndpoint(conf.appwriteUrl)
                  .setProjectId(conf.appwriteProjectId);

              this.account = new Account(this.client)
        }

}

export default AuthService;
```

now all is set and we can use appwrite's functions to create account, but we dont want to make it a dependancy if in future we decide to move to diffrent service we should be able to just change few lines and its done

so here itself we will create our own createAccount async meathod wich will call appwrite's meathods. so in future we just have to change this meathod and all set

```js
async createAccount({ email, password, name}){
      try{
             const userAccount = await this.account.create( ID.unique(), email, password, name);
              
            if( userAccount ){
                  return this.login({email, password});
            }
            else {
                  return userAccount;
            }
      }
      catch(error) throw(error);
}

async create login({ email, password}){

      try{
          this.account.createEmailSession(email,password)
      }
      catch(error) throw(error);
}

//now to create meathod that will check if the user is logged in or not
async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

// and now logout
async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
```



