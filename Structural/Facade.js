// Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

class Engine {
    start(){
        console.log('started...')
    }
    stop(){
        console.log('stoped...')
    }
    accelerate(){
        console.log('accelerated...')
    }
}

class IgnitionSystem {
    constructor(){
        this.engine = new Engine()
    }
    startCar(){
        this.engine.start()
        console.log('car is ready to go...')
    }
    turnedOff(){
        this.engine.stop()
        console.log('car is turned off...')
    }
    drive (){
        this.engine.accelerate()
        console.log('car is going')
    }
}

 const ignition = new IgnitionSystem();

 ignition.startCar()


