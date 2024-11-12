// Classes
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    
    descrizione() {
        return `La nuova ${this.marca} ${this.modello} del ${this.anno} e l'auto piu performante.`
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`
    }

    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear(); // Ottieni l'anno corrente
        return annoCorrente - this.anno;  // Calcola la differenza tra l'anno corrente e l'anno di fabbricazione
    }

    mostraEtà() {
        const eta = this.#calcolaEtà();  // Richiama il metodo privato #calcolaEtà
        return `L'età dell'automobile è di ${eta} anni.`;
    }
}

let newCar = new Automobile("Audi", "Rs6", 2024);
console.log(newCar.descrizione()); //.descrizione per stampare anche la descrizione ,il nome puo essere descrizione oppure qualsiasi altra cosa.
console.log(newCar.mostraEtà()); //Mostra l'eta dell'auto
// aggiungi km e mostra il chilometraggio attuale:
newCar.aggiungiChilometri(180);
console.log(newCar.mostraChilometraggio());

// Sottoclasse
class Elettrica extends Automobile {
    autonomia = 0;
    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }
    descrizione() {
        return `La ${this.marca} ${this.modello} del ${this.anno}, ha un'autonomia di ${this.autonomia} km`;
    }
    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } 
    }
    mostraAutonomia() {
        return `L'autonomia attuale è di ${this.autonomia} km`;
    }
}

let autoElettrica = new Elettrica("Toyota", "Yaris", 2023, 0, 500);
console.log(autoElettrica.descrizione());
autoElettrica.ricarica();
console.log(autoElettrica.mostraAutonomia());

//Prototype
Automobile.prototype.saluta = function() {
    return `Ciao! Questa è una ${this.marca} ${this.modello}.`;
}

let oldCar = new Automobile("Fiat", "Punto", 2008);
console.log(oldCar.saluta());
let futureCar = new Elettrica("Tesla", "Cybertruck");
console.log(futureCar.saluta());