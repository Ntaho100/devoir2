1. // difference entre while et do while//

La différence entre les boucles while et do… while est basee dans leurs constructions.
Elle reside aussi dans le comment ces deux boucles font les opérations.
Avec la boucle do… while,l'operation va être exécuté avant l’évaluation de la condition de sortie.
Cela signifie qu’à la différence de la boucle while, on effectuera toujours un passage dans une boucle do… while 
même si la condition de sortie n’est jamais vérifiée et donc le code de la boucle sera 
toujours exécuté au moins une fois.

2. Avec l'object CNI cree en cours, utiliser la boucle FOR ... IN pour afficher toute les valeurs de l'obejt CNI

const CNI={

    firstname:"ntahondereye",
    lastname:"jean florin",
    father:"ntahondereye",
    mother:"hakizimana",
    province:"buja",
    commune:"kamenge",
    placeanddateofbirth:" kamenge,1990",
    etatcivil:"single",
    idnumber:"1406/50.180/2009",
}

   
     
    for (i in CNI){
        console.log(i, ': ', CNI[i])
    }


3. // Donnez la difference entre FOR..IN et FOR...OF avec des exemples//

const voitures=['BMW','FIAT','TI','KZ','CARINA','V8','BENZ'];

for (let voiture of voitures){
    console.log(voiture)
}
