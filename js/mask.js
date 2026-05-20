const data = document.querySelector(".data");

data.addEventListener("input", () => {
    let valor = data.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");

    data.value = valor;
});