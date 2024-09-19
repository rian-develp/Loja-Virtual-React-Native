import {User} from '../model/User';

class SignUpRepository {

    signUp(name, password){
        User.prototype.setName(name)
        User.prototype.setPassword(password);
        return true;
    }
}

export {SignUpRepository as SignUpRepository}