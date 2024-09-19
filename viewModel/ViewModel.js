import { SignUpRepository } from '../repositories/SignUpRepository';
import { SignInRepository } from '../repositories/SignInRepository';
import { HomeRepository } from '../repositories/HomeRepository';

class ViewModel{

    signIn = (userName, userPassword) => {
        const result = SignInRepository.prototype.signIn(userName, userPassword);
        return result;
    };

    signUp = (userName, userPassword) => {
        const result = SignUpRepository.prototype.signUp(userName, userPassword);
        return result;
    };

    getAllLaunchs = () => {
        const homeRepository = new HomeRepository();
        const result = homeRepository.getAllLaunchs();
        return result;
    }
}

export {ViewModel as ViewModel}