
const barra1 = document.getElementById("barra1");
const html = document.querySelector(".progresoHtml")

barra1.addEventListener("mouseover",() => {
    const value = 75;
    html.style.setProperty("--porcentaje", `${value}%`);
});

const barra2 = document.getElementById("barra2");
const css = document.querySelector(".progresoCss");

barra2.addEventListener("mouseover",() => {
    const value = 65;
    css.style.setProperty("--porcentaje", `${value}%`);
})

const barra3 = document.getElementById("barra3");
const Js = document.querySelector(".progresoJs");

barra3.addEventListener("mouseover",() => {
    const value = 45;
    Js.style.setProperty("--porcentaje", `${value}%`);
})

const barra4 = document.getElementById("barra4");
const Ph = document.querySelector(".progresoPh");

barra4.addEventListener("mouseover",() => {
    const value = 60;
    Ph.style.setProperty("--porcentaje", `${value}%`);
})