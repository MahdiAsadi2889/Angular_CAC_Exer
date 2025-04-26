class User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(): void {
    if (this.username == "admin" && this.password == "1234") {
      console.log("Login Sucessfully");
    } else {
        console.log("Login Failed");
    }
  }
}

const user1 = new User("admin","1234");
user1.login();