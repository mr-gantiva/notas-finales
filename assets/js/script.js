/* Datos alumno */

let nombre = prompt("Ingrese el nombre del alumno:");
let carrera = prompt("Ingrese la carrera cursada");

let nombreResultado = document.getElementById("nombreAlumno");
nombreResultado.textContent = nombre;

let carreraResultado = document.getElementById("carreraAlumno");
carreraResultado.textContent = carrera;

/* Calculo HTML */
let nota1Html = parseFloat(prompt("Ingrese la nota 1 de HTML:"));
let nota2Html = parseFloat(prompt("Ingrese la nota 2 de HTML:"));
let nota3Html = parseFloat(prompt("Ingrese la nota 3 de HTML:"));

let nota1HtmlResultado = document.getElementById("nota1Html");
nota1HtmlResultado.textContent = nota1Html;

let nota2HtmlResultado = document.getElementById("nota2Html");
nota2HtmlResultado.textContent = nota2Html;

let nota3HtmlResultado = document.getElementById("nota3Html");
nota3HtmlResultado.textContent = nota3Html;

let resultadoHtml = document.getElementById("promedioHtml");
let calculoPromedioHtml = ((nota1Html + nota2Html + nota3Html) / 3).toFixed(2);

resultadoHtml.textContent = calculoPromedioHtml;

/* Calculo CSS */
let nota1Css = parseFloat(prompt("Ingrese la nota 1 de CSS:"));
let nota2Css = parseFloat(prompt("Ingrese la nota 2 de CSS:"));
let nota3Css = parseFloat(prompt("Ingrese la nota 3 de CSS:"));

let nota1CssResultado = document.getElementById("nota1Css");
nota1CssResultado.textContent = nota1Css;

let nota2CssResultado = document.getElementById("nota2Css");
nota2CssResultado.textContent = nota2Css;

let nota3CssResultado = document.getElementById("nota3Css");
nota3CssResultado.textContent = nota3Css;

let resultadoCss = document.getElementById("promedioCss");
let calculoPromedioCss = ((nota1Css + nota2Css + nota3Css) / 3).toFixed(2);

resultadoCss.textContent = calculoPromedioCss;

/* Calculo JS */
let nota1Js = parseFloat(prompt("Ingrese la nota 1 de JS:"));
let nota2Js = parseFloat(prompt("Ingrese la nota 2 de JS:"));
let nota3Js = parseFloat(prompt("Ingrese la nota 3 de JS:"));

let nota1JsResultado = document.getElementById("nota1Js");
nota1JsResultado.textContent = nota1Js;

let nota2JsResultado = document.getElementById("nota2Js");
nota2JsResultado.textContent = nota2Js;

let nota3JsResultado = document.getElementById("nota3Js");
nota3JsResultado.textContent = nota3Js;

let resultadoJs = document.getElementById("promedioJs");
let calculoPromedioJs = ((nota1Js + nota2Js + nota3Js) / 3).toFixed(2);

resultadoJs.textContent = calculoPromedioJs;
