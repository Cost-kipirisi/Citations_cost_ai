/* ========================= */
/* FILE : script.js */
/* ========================= */

const quotes = [

{
    quote:"Je puis tout par celui qui me fortifie.",
    author:"Bible — Philippiens 4:13"
},

{
    quote:"Au commencement Dieu créa les cieux et la terre.",
    author:"Bible — Genèse 1:1"
},

{
    quote:"L'Éternel est mon berger : je ne manquerai de rien.",
    author:"Bible — Psaume 23"
},

{
    quote:"Que votre cœur ne se trouble point.",
    author:"Jésus-Christ"
},

{
    quote:"Je pense, donc je suis.",
    author:"René Descartes"
},

{
    quote:"Connais-toi toi-même.",
    author:"Socrate"
},

{
    quote:"Le bonheur dépend de nous-mêmes.",
    author:"Aristote"
},

{
    quote:"L'homme est condamné à être libre.",
    author:"Jean-Paul Sartre"
},

{
    quote:"Celui qui a un pourquoi peut supporter presque n'importe quel comment.",
    author:"Friedrich Nietzsche"
},

{
    quote:"La vie est un mystère qu'il faut vivre.",
    author:"Gandhi"
},

{
    quote:"Le succès commence quand tu refuses d'abandonner.",
    author:"Cost"
},

{
    quote:"Même dans l'obscurité, une petite lumière peut guider le monde.",
    author:"Cost"
},

{
    quote:"Les rêves deviennent réalité pour ceux qui travaillent dans le silence.",
    author:"Cost"
},

{
    quote:"La discipline transforme les ambitions en victoires.",
    author:"Cost"
},

{
    quote:"Quand Dieu ouvre une porte, aucun homme ne peut la fermer.",
    author:"Cost"
},

{
    quote:"Chaque jour est une nouvelle opportunité de devenir meilleur.",
    author:"Cost"
},

{
    quote:"Le courage grandit quand la peur refuse de gagner.",
    author:"Cost"
},

{
    quote:"Le futur appartient à ceux qui osent créer.",
    author:"Cost"
}

];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {

    const random = Math.floor(Math.random() * quotes.length);

    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;

    setTimeout(() => {

        quoteText.innerText = quotes[random].quote;
        authorText.innerText = "— " + quotes[random].author;

        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;

    },300);

});

copyBtn.addEventListener("click", () => {

    const text =
    quoteText.innerText + " " + authorText.innerText;

    navigator.clipboard.writeText(text);

    copyBtn.innerText = "Copié ✔";

    setTimeout(() => {

        copyBtn.innerText = "Copier";

    },2000);

});
