function crearEncabezado(titulo) {
    return `<header><h1>${titulo}</h1></header>`;
}

function crearCuerpo(mensaje) {
    return `<main><p>${mensaje}</p></main>`;
}

function crearFooter(footer) {
    return `<footer><p>${footer}</footer>`;
}

module.exports = {
    crearEncabezado, 
    crearCuerpo,
    crearFooter
};