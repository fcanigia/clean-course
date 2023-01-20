(() => {

    // aplicando el principio de responsabilidad unica
    // priorizar la composicion frente a la herencia

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
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;
        
        constructor(
            {email, role}: UserProps
        ){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }

    }

    interface SettingsProp{
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class Settings {
        public workingDirectory : string;
        public lastOpenFolder: string;

        constructor(
            {
            workingDirectory,
            lastOpenFolder,
        } : SettingsProp
        ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            {
                name, gender, birthdate,
                email, role,
                workingDirectory, lastOpenFolder
            } : UserSettingsProp
        ){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});
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