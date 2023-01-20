(() => {

    // no aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;
        
        constructor(
            {email, role, name, gender, birthdate}: UserProps
        ){
            super({name, gender, birthdate});

            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }

    }

    interface UserSettingsProp{
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class UserSettings extends User {
        public workingDirectory : string;
        public lastOpenFolder: string;

        constructor(
            {
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate} : UserSettingsProp
        ){
            super({email, role, name, gender, birthdate});

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: '/bin/',
        email: 'foacla@gmail.com',
        role: 'boss',
        birthdate: new Date(),
        name: 'Facundo',
        gender: 'M'
    });

    console.log({userSettings});

} )();