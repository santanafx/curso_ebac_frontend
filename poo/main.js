class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
}

const moto1 = new Moto("Suzuki", "Hayabusa", "500 cc");
const carro2 = new Carro("Ford", "Fusion", "Rosa");
const carro1 = new Carro("Toyota", "Corolla", "Prata");
