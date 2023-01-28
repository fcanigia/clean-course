interface Bird{
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird{
    swim(): void;
}

interface RunningBird{
    run(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
    public run() {}
}

class Hummingbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird,  RunningBird{
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmingBird, RunningBird {
    public eat() {}
    public run() {}
    public swim() {}
}