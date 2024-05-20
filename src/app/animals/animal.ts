//lasse qui reprsente les animaux mais pas les animaux mais seuleement pour presenter aux visiteur, n'es pas representatif de la base de donnees

export class Animal {
    constructor(
        public id: number,
        public name: string,
        public espece: string,
        public etat: string,

        public description: string,
        public image: string,//lorsque l'on mettra en place la base de donnees, il faudra creer une classe Image
        public habitat: string, //lorsque l'on mettra en place la base de donnees, il faudra creer une classe Habitat
    ) { }
}
