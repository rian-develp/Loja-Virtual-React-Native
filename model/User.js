class User {

    name;
    password;

    constructor(name, password) {
        this.name = name;
        this.password = password;
    };

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password){
        this.password = password;
    }
}
export { User as User }