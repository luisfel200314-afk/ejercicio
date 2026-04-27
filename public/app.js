
const VERSION = '1.2.0'; 

function saludar(nombre) {
 
    return `Hola ${nombre}, bienvenido a Felipe`;
}

function healthcheck() { 
    return {
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: 'Sistemas Felipe funcionando correctamente'
    };
}

function verificarSistema() {
    const resultado = healthcheck();
    const statusDiv = document.getElementById('status');
    
    if (statusDiv) {
    
        statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
        statusDiv.style.color = '#009B4C';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const versionElement = document.getElementById('version');
    if (versionElement) {
        versionElement.textContent = `v${VERSION}`;
    }
    verificarSistema();
});