import * as lang from './js/language.js'

if (lang.isKorea()) {
    window.location.replace("kr_index.html");
}
else {
    window.location.replace("en_index.html");
}