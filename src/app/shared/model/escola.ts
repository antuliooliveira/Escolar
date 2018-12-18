export class Escola {

    //Usar a '?' torna o atributo opcional
    constructor (public id?: number,
        public nome?: string,
        public matriculados?: number,
        public professores?: number,
        public labinformatica?: boolean) {}


    get totalVerba() {

        let total =  (50*this.matriculados) + (400 * this.professores) + 10000;
        return total;
    }

}