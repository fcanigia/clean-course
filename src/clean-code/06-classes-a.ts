(() => {

    // no aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}

    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate);
        }

        checkCredentials() {
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, lastAccess, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/bin/',
        'foacla@gmail.com',
        'boss',
        new Date(),
        'Facundo',
        'M',
        new Date()
    )

    console.log(userSettings);

} )();