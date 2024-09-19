import { errors } from "../utils/errors";

export const validateUserAndPassword = (userName, userPassword, setUserNameError, setUserPasswordError) => {
    
    if(userPassword == '' && userName == ''){
        setUserNameError(errors.BLANK_USER);
        setUserPasswordError(errors.BLANK_PASSWORD);
        return false;
    }else if(userPassword.length < 5){
        setUserPasswordError(errors.PASSWORD_LEAK_EXCEPTION);
        return false;
    }else if(userName == ''){
        setUserNameError(errors.BLANK_USER);
        return false;
    } else{
        setUserNameError('');
        setUserPasswordError('');
        return true;
    }
}