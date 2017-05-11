class favSport {
    constructor(name, gender, sport) {
        this.name = name;
        this.gender = gender;
        this.sport = sport;
    }
    toString() {
          var pronoun;
          if(this.gender === 'male') {
            pronoun = 'I am a male';
          } else if(this.gender === 'female') {
            pronoun = 'I am a female';
          }
          var stringi;
          stringi = pronoun + '. My favourtite sport is ' + this.sport;
      //alert (stringi);
      return stringi;
    }
}

class Teacher extends favSport {
    constructor(name, gender, sport, subject) {
        super(name, gender); // (A)
        this.subject = subject;
    }
    toString() {
        return super.toString() + '. I teach ' + this.subject; // (B)
    }
}

class Student extends favSport {
    constructor(name, gender, sport, subject) {
        super(name, gender); // (A)
        this.subject = subject;
    }
    toString() {
        return super.toString() + '. I learn ' + this.subject; // (B)
    }
}