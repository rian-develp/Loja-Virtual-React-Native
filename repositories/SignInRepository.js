import { User } from '../model/User';

class SignInRepository {
 
    signIn(name, password){
        if(name == User.prototype.getName() && password == User.prototype.getPassword()){
            return true;
        }
    }
}

export {SignInRepository as SignInRepository}