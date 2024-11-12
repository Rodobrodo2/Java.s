class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `${this.marca} ${this.modello} è del ${this.anno} e ha un chilometraggio di ${this.chilometraggio} km`
    }
    
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore di ${auto2.marca} ${auto2.modello}.`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore di ${auto1.marca} ${auto1.modello}.`;
        } else {
            return `Le due auto hanno lo stesso chilometraggio.`;
        }
    }
}

let auto1 = new Automobile("Toyota", "Yaris", 2023, 50000);
let auto2 = new Automobile("Audi", "A4", 2022, 75000);

console.log(auto1.descrizione());
console.log(auto2.descrizione());
console.log(Automobile.confrontaChilometraggio(auto1, auto2));