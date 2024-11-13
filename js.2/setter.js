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

class Camion extends Automobile {
    caricoMassimo;
    constructor(marca, modello, anno, chilometraggio = 0, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }
    
    descrizione() {
        return `${super.descrizione()} Può trasportare fino a ${this.caricoMassimo} kg.`;
    }


    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico aumentato di ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.warn("Impossibile caricare. Supera il carico massimo consentito!");
        }
    }

    mostraCaricoAttuale() {
        return `Il carico attuale è di ${this.caricoAttuale} kg su un massimo di ${this.caricoMassimo} kg.`;
    }
}

let camion = new Camion("Mercedes", "Actros", 2023, 5000, 20000);
console.log(camion.descrizione());

camion.carica(5000);
console.log(camion.mostraCaricoAttuale()); 

camion.carica(18000);
console.log(camion.mostraCaricoAttuale()); 