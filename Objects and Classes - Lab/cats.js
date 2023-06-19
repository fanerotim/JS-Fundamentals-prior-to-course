function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let name;
    let age;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        name = command.shift();
        age = command.shift();

        let cat = new Cat(name, age);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);