class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    log(){
        console.log("Animal "+this.name+" speaks "+this.speaks);
    }

    static speaks(){
        console.log("Animal Speaks : ");
    }
}


const dog = new Animal("Dog", "4", "bark");
dog.log();
Animal.speaks();