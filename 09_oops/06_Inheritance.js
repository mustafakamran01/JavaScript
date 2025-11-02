class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Course is successfully added by ${this.username}`);
    }
}

const chai = new Teacher('Mustafa Kamran', 'kamran@delloite.com', '123')
chai.addCourse()
chai.logMe()