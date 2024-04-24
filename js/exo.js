/*
Étape 1 - Exécuter quelque chose
Ça commence mal, j'ai voulu commencer avec un console.log dans exo.js mais j'ai une erreur en console, tu sais voir ce qui ne va pas et rectifier le tir ?
*/

console.log('test 1...2...1...2');

/*
Étape 2 - Objet
A partir de là tout ce que tu écris se passe dans exo.js.

Dans notre programme on a besoin de représenter l'entité Hercule.

Il est caractérisé par les informations suivantes (je t'ai mis les noms à donner à tes propriétés) :

son nom name est Hercule,
son travail job est Demi-dieu,
son âge age est de 35 ans,
son numéro de département department est le 75,
son tour de bras arm est de 60,5 centimètres,
le fait de vivre en couple inRelationship est Oui il est en couple.
Définis un objet pour représenter tout ça, à l'intérieur choisis les types de valeur judicieusement.

Place au test :

J'ai prévu une méthode fillProfil dans l'objet base (il est dans base.js),
elle sert à remplir les informations du profil dans la page et attend un objet en argument, ça tombe bien ! 
Exécute base.fillProfil() en lui passant en argument l'objet que tu viens de créer. Si tout se passe bien tu devrais voir le profil complété.
*/

let objet = {
    "name" : "Hercule", 
    "job" : "Demi-dieu",
    "age" : 35,
    "department": 75,
    "arm": 60.5,
    "inRelationship" : "Oui",
};

base.fillProfil(objet);

/*
Étape 3 - Tableau
Cette fois-ci on veut représenter les amis d'Hercule. 
Pour cela on va créer un tableau qui contiendra les noms des 4 amis d'Hercule : Jupiter, Junon, Alcmène et Déjanire.

Place aux tests :

J'ai prévu une autre méthode dans base qui s'appelle printFriends, 
elle attend un tableau en argument. 
Exécute là et passe lui ton tableau pour faire apparaître la liste des amis.

Et un deuxième test :

J'ai prévu une autre méthode base pour afficher cette fois-ci le meilleur ami. 
Allez je te dis rien, regarde dans base pour la trouver, j'ai tout documenté. 
Tu auras besoin de l'exécuter, tu dois lui passer la première valeur de ton tableau, c'est lui le meilleur ami d'Hercule :) 
Si tout va bien tu vois son nom apparaître à côté du coeur.

*/

let friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

base.printFriends(friends);

base.setBestFriend(friends[0]);

/*
Étape 4 - DOM
Il manque un titre dans ma page, je te demande de le créer uniquement en JS !

Crée une balise h1,
donne lui la classe banner__title,
écris dedans Vous consultez le profil de Hercule,
insère la dans l'élement possédant l'id header-banner, tu devrais voir ton titre apparaître en haut à droite.
 */

let titreJs = document.createElement('h1')
titreJs.className = "banner__title"
titreJs.textContent = "Vous consultez le profil de Hercule"

let head = document.getElementById("header-banner")
head.appendChild(titreJs)

/*
Étape 5 - Boucle
On doit afficher tous ses travaux !
La méthode displayWork de l'objet base permet d'afficher 1 seul des travaux à la fois. 
Elle prend un paramètre je te laisse regarder...
L'idée c'est de compter de 0 à 11 et d'appeler à chaque fois la méthode displayWork.
*/

for ( let i=0; i<=11; i= i + 1) {
    base.displayWork(i);
}

/*
Étape 6 - Condition
On va afficher la disponibilité d'Hercule suivant l'heure qu'il est !

Entre 8 et 20 heures Hercule est Disponible, sinon il est Non disponible.
Pour connaître l'heure tu peux utiliser la méthode getHour de l'objet base si tu veux.
Tu vas afficher l'information de disponibilité dans l'élement qui a l'id availability.
Tu peux également ajouter une classe off sur cet élement lorsque Hercule est Non disponible ça passera la pastille en rouge.
 */

let heure = base.getHour();

let dipoOk = document.getElementById("availability");

if (heure >= 8 && heure < 20) {
    dipoOk.textContent = 'Disponible';
  } else {
    dipoOk.textContent = 'Non disponible';
    dipoOk.classList.add('off');
  };

/*
Étape 7 - Fonction
Les fonctions c'est ma passion ! Je voudrais que tu crées une fonction pour générer un pseudo.

Elle doit pouvoir recevoir 2 informations en paramètres :

un prénom,
un numéro de département.
Elle doit utiliser ces informations pour générer un pseudo type Prénom-du-NuméroDeDépartement. 
Par exemple en exécutant la fonction avec le prénom Toto et le département 10, on doit obtenir Toto-du-10.

Il faut que ta fonction retourne cette valeur.

Place à l'exécution :

Exécute ta fonction en lui passant le prénom Hercule et son numéro de département (on l'a défini à l'étape 2).
Utilise la valeur récupérée pour écrire le pseudo dans l'élement possédant l'id profil-name.
*/

function genPseudo(prénom, Numdepartment) {
    let gen = prénom + "-du-" + Numdepartment;
    console.log(gen);
    return gen;
};

let pseudo = genPseudo('Hercule', objet["department"]);

let profilName = document.getElementById("profil-name");

profilName.textContent = pseudo;

/*
Étape 8 - Event
On va faire fonctionner le menu en haut à gauche ! Pour cela, 
écoute l'événement click sur l'élement possédant l'id menu-toggler.

J'ai déjà prévu une classe banner--open qui ajoute les styles nécessaires pour voir le menu, 
tu dois l'ajouter ou la retirer sur l'élement ayant l'id header-banner :

Quand l'élement header-banner a déjà la classe banner--open (lors du click sur menu-toggler), on veut la lui retirer,
Quand l'élement header-banner n'a pas la classe banner--open (toujours au moment d'un click), on veut la lui ajouter.
Si tout va bien tu vois apparaître le menu au clic, puis si tu recliques il disparaît \o/
*/

let headerBanner = document.getElementById("header-banner")

let click = document.getElementById("menu-toggler")

click.addEventListener('click', bannerOpen)

function bannerOpen (){
     
    if (headerBanner.classList.contains('banner--open')) {
        // Si oui, retirer la classe banner--open pour masquer le menu
        headerBanner.classList.remove('banner--open');
      } else {
        // Sinon, ajouter la classe banner--open pour afficher le menu
        headerBanner.classList.add('banner--open');
      }
}

/*
Étape 9 - Event bis
Cette fois-ci on va réagir à la soumission du formulaire en haut à droite qui possède l'id contact :

Je ne veux pas que la page s'actualise lorsqu'on valide le formulaire.
A la place il faut afficher une boîte de dialogue en alerte qui dit Hercule ne souhaite pas être dérangé.
*/

let contact = document.getElementById("contact")
contact.addEventListener('submit', antiCharge)

function antiCharge (event) {
    event.preventDefault();
    alert("Hercule ne souhaite pas être dérangé");
};

/*
Bonus Étape 10 - Algo
La programmation c'est comme une recette de cuisine, il faut décrire nos étapes une par une pour faire un bon résultat !

On veut afficher le pourcentage de votes pour Hercule et pour César sur la droite.
Le nombre de votes de chacun est accessible via la propriété vote de l'objet base.ok
La formule pour calculer un pourcentage est valeurRelative / valeurTotale * 100.
Tu pourras afficher tes calculs dans les 2 élements possédant la classe people__popularity présents pour Hercule dans l'élément avec l'id #trends-hercule 
et pour César dans l'élément avec l'id #trends-cesar.
La cerise sur le gâteau serait de donner une largeur aux 2 élements qui ont la classe people__bar, 
ce sont les 2 petites barres oranges, si on utilise le pourcentage calculé comme largeur ça devrait être chouette !
A toi d'assembler les morceaux 🤔.
*/

let voteCesar = base.vote.cesar
let voteHercule = base.vote.hercule
let voteTotale = voteCesar + voteHercule

pourcentageCesar = (voteCesar / voteTotale)*100 
pourcentageHercule = (voteHercule / voteTotale)*100


let trendHercule = document.getElementById("trends-hercule")
let trendCesar = document.getElementById("trends-cesar")

trendHercule.querySelector(".people__popularity").textContent = pourcentageHercule.toFixed(2) + "%";
trendCesar.querySelector(".people__popularity").textContent = pourcentageCesar.toFixed(2) + "%";

let herculeBar = trendHercule.querySelector(".people__bar");
let cesarBar = trendCesar.querySelector(".people__bar");

herculeBar.style.width = pourcentageHercule + "%";
cesarBar.style.width = pourcentageCesar + "%";