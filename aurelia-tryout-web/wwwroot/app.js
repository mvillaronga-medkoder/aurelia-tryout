import 'bootstrap'

export class Welcome {
    //the below along with several other variations do not work.  settled on the changes you see below
    //heading = 'Welcome to the Aurelia Navigation App!';
    //firstName = 'John';
    //lastName = 'Doe';

    constructor() {
        this.firstName = 'Buckaroo';
        this.lastName = 'Bonsai';
        this.heading = 'Welcome to my lame Aurelia Tutorial'
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Welcome, ${this.fullName}!`);
  }
}