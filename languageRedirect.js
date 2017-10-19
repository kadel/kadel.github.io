let supportedLanguages = ["cs", "en"];
let language = "en";

for (i=0; i<navigator.languages.length; i++) { 
    let lang = navigator.languages[i]         
    if (supportedLanguages.indexOf(lang) !== -1) {
        language = lang;
        break;
    }
};

window.location.href = "http://localhost:8000/public/" +language;

