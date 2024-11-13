class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this._chilometraggioInterno = chilometraggio;
    }

    set chilometraggio(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.chilometraggio) {
            this._chilometraggioInterno = nuovoChilometraggio;
        } else {
            console.warn("Il nuovo chilometraggio deve essere maggiore o uguale al chilometraggio attuale.");
        }
    }

    get chilometraggio() {
        return this._chilometraggioInterno;
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }

    descrizione() {
        return `La nuova ${this.marca} ${this.modello} del ${this.anno} è l'auto più performante.`;
    }
}

let auto = new Automobile("Audi", "A4", 2021, 5000);
console.log(auto.mostraChilometraggio());

auto.chilometraggio = 6000;
console.log(`Chilometraggio aggiornato: ${auto.chilometraggio} km`);

auto.chilometraggio = 3000;
console.log(auto.mostraChilometraggio());