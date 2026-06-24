lucide.createIcons();

const formulario = document.querySelector("form");

formulario.addEventListener("submit", gerarRecitativo);

function gerarRecitativo(event) {  
    event.preventDefault();

    const dados = pegarDadosFormulario();

    const resultado = document.getElementById("resultado-recitativo");

    document.getElementById("btnBaixar").style.display = "block";

    resultado.innerHTML = `
        <div class="papeleta">

            <h3>CONGREGAÇÃO CRISTÃ NO BRASIL</h3>

            <p class="campo-papeleta">
                <span class="titulo-campo">NOME:</span>
                <span class="linha-grande">
                    ${dados.nome}
                </span>
            </p>

            <p class="campo-papeleta">
                <span class="titulo-campo">LIVRO:</span>
                <span class="linha-grande">
                    ${dados.livro}
                </span>
            </p>

            <div class="linha-versiculos">

                <div class="campo-inline">
                    <span class="titulo-campo">CAPÍTULO:</span>

                    <span class="linha-capitulo">
                        ${dados.capitulo}
                    </span>
                </div>

                <div class="campo-inline">
                    <span class="titulo-campo">VERSOS:</span>

                    <span class="linha-verso-maior">
                        ${dados.versoInicial}
                    </span>

                    <span>ao</span>

                    <span class="linha-verso-menor">
                        ${dados.versoFinal}
                    </span>
                </div>

            </div>

            <p class="campo-papeleta">
                <span class="titulo-campo">APÓS:</span>

                <span class="linha-grande">
                    ${dados.continuacao}
                </span>
            </p>

            <div class="campo-data">

                <span class="titulo-campo">
                    RECITATIVO PARA O DIA:
                </span>

                <span class="linha-dia">
                    ${dados.dataRecitativo.split('/')[0] || ''}
                </span>

                <span class="barra-data">/</span>

                <span class="linha-mes">
                    ${dados.dataRecitativo.split('/')[1] || ''}
                </span>

                <span class="barra-data">/</span>

                <span class="linha-ano">
                    ${dados.dataRecitativo.split('/')[2] || ''}
                </span>

            </div>

            <p class="campo-papeleta">
                <span class="titulo-campo">AUXILIAR:</span>

                <span class="linha-grande">
                    ${dados.nomeAuxiliar}
                </span>
            </p>

        </div>
    `;

    // limparFormulario();
}

function limparFormulario() {

    document.getElementById('nome').value = '';
    document.getElementById('livro').value = '';
    document.getElementById('capitulo').value = '';
    document.getElementById('versoInicial').value = '';
    document.getElementById('versoFinal').value = '';
    document.getElementById('continuacao').value = '';
    document.getElementById('dataRecitativo').value = '';
    document.getElementById('nomeAuxiliar').value = '';
}

function pegarDadosFormulario() {

    const dados = {};

    dados.nome = document.getElementById('nome').value;
    dados.livro = document.getElementById('livro').value;
    dados.capitulo = document.getElementById('capitulo').value;
    dados.versoInicial = document.getElementById('versoInicial').value;
    dados.versoFinal = document.getElementById('versoFinal').value;
    dados.continuacao = document.getElementById('continuacao').value;
    dados.dataRecitativo = document.getElementById('dataRecitativo').value;
    dados.nomeAuxiliar = document.getElementById('nomeAuxiliar').value;

    return dados;
}

function baixarImagem() {

    const papeleta = document.querySelector(".papeleta");

    papeleta.classList.add("papeleta-export");

    html2canvas(papeleta, {
        scale: 3,
        backgroundColor: "#ffffff"
    }).then((canvas) => {

        papeleta.classList.remove("papeleta-export");

        const link = document.createElement("a");

        link.download = "recitativo.png";

        link.href = canvas.toDataURL("image/png");

        link.click();
    });
}

function paginaPortugues() {
    window.location.href = "../GeradorRecitativo/";
}

function paginaEspanhol() {
    window.location.href = "../GeradorRecitativo/es/index.html";
}