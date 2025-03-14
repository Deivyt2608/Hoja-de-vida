
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

const btn = document.getElementById('modo-btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
        btn.textContent = 'Modo Claro';
        localStorage.setItem('modo', 'oscuro');
    } else {
        btn.textContent = 'Modo Oscuro';
        localStorage.setItem('modo', 'claro');
    }
});

if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modo-oscuro');
    btn.textContent = 'Modo Claro';
}