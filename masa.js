
const calcularIMC = (peso, estatura) => {
    return peso / (estatura * estatura);
};

const obtenerClasificacion = (imc) => {

    if (imc < 18.5) {
        return {
            nombre: "Bajo peso",
            color: "table-info"
        };
    }

    if (imc < 25) {
        return {
            nombre: "Normal",
            color: "table-success"
        };
    }

    if (imc < 30) {
        return {
            nombre: "Sobrepeso",
            color: "table-warning"
        };
    }

    if (imc < 35) {
        return {
            nombre: "Obesidad I",
            color: "table-danger"
        };
    }

    if (imc < 40) {
        return {
            nombre: "Obesidad II",
            color: "table-danger"
        };
    }

    return {
        nombre: "Obesidad III",
        color: "table-danger"
    };
};

const calcular = () => {

    let peso = parseFloat(document.querySelector("#peso").value);
    let estatura = parseFloat(document.querySelector("#estatura").value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Ingresa datos validos");
        return;
    }

    let imc = calcularIMC(peso, estatura);

    let resultado = obtenerClasificacion(imc);

    document.querySelector("#resultado").textContent = imc.toFixed(2);

    let clasificacion = document.querySelector("#clasificacion");

    clasificacion.textContent = resultado.nombre;
    clasificacion.className = "text-center " + resultado.color;
};

const reset = () => {

    document.querySelector("#peso").value = "";
    document.querySelector("#estatura").value = "";

    document.querySelector("#resultado").textContent = "0.00";

    document.querySelector("#clasificacion").textContent = "Esperando datos...";
    document.querySelector("#clasificacion").className = "text-center";
};

document.querySelector("#calcular").addEventListener("click", calcular);

document.querySelector("#reset").addEventListener("click", reset);
