var NomeCity = null;

function VerDados() {

    localStorage.clear();

    var divC = document.getElementsByClassName("Adicionar")[0]
    divC.style.display = 'none';

    var getitem = document.getElementsByClassName("Informacoes")[0]
    getitem.style.display = 'block'


    var ItemClick = event.target;
    NomeCity = ItemClick.closest('div').querySelector('h3').textContent;

    var Json = new XMLHttpRequest();
    Json.open("GET", "https://localhost:44317/NoRelacional/" + NomeCity + ".json", true);
    Json.send();

    document.getElementById('hdnValor').value = NomeCity;
    

    Json.onload = function () {
        if (Json.readyState === 4 && Json.status === 200) {
            var DadosCity = JSON.parse(Json.responseText);


            var cabecalho = document.getElementsByClassName("cabecalho")[0];

            var Select = document.querySelector('#Select');
            var Select2 = document.querySelector('#Select2');
            if (Select) {
                Select.remove();
                Select2.remove();
            }

            var button_Inserir = document.createElement('button');
            button_Inserir.id = 'Select';
            button_Inserir.onclick = AdicionarInputs;
            button_Inserir.innerText = 'Adicionar';
            button_Inserir.setAttribute('type', 'button');

            var button_Inserir2 = document.createElement('button');
            button_Inserir2.id = 'Select2';
            //button_Inserir.onclick = AdicionarInputs;
            button_Inserir2.innerText = 'Pesquisar';
            button_Inserir2.setAttribute('type', 'button');

            cabecalho.append(button_Inserir2,button_Inserir);

            var getitem = document.getElementsByClassName("Informacoes")[0]

            var cont = document.querySelectorAll('.Container_Item ')

            if (cont) {
                cont.forEach(function (remover) {
                    remover.remove()

                })
            }


            if (DadosCity) {
                for (i = 0; i < DadosCity.dados.length; i++) {
                    var div = document.createElement('div')
                    div.classList.add('Container_Item')
                    div.setAttribute('data-id', i)

                    
                    var h3Data = document.createElement('h3')
                    h3Data.innerText = 'Data:  '
                    var pData = document.createElement('p')
                    pData.innerText = " " + " " + DadosCity.dados[i].data
                    h3Data.appendChild(pData)


                    var h3Titulo = document.createElement('h3')
                    h3Titulo.innerText = 'Titulo:  '
                    var pTitulo = document.createElement('p')
                    pTitulo.innerText = " " + " " + DadosCity.dados[i].titulo
                    h3Titulo.appendChild(pTitulo)

                    var h3Modulo = document.createElement('h3')
                    h3Modulo.innerText = 'Modulo:  '
                    var pModulo = document.createElement('p')
                    pModulo.innerText = " " + " " + DadosCity.dados[i].modulo
                    h3Modulo.appendChild(pModulo)

                    var h3Sistema = document.createElement('h3')
                    h3Sistema.innerText = 'Sistema:  '
                    var pSistema = document.createElement('p')
                    pSistema.innerText = " " + " " + DadosCity.dados[i].sistema
                    h3Sistema.appendChild(pSistema)

                    var h3Texto = document.createElement('h3')
                    h3Texto.innerText = 'Texto:  '
                    h3Texto.id = 'none'
                    var pTexto = document.createElement('p')
                    pTexto.innerText = " " + " " + DadosCity.dados[i].texto
                    h3Texto.appendChild(pTexto)




                    div.append(h3Data, h3Titulo, h3Modulo, h3Sistema, h3Texto)

                    getitem.appendChild(div)
                }
            }

        }
    };
}

function AdicionarInputs() {
    var cont = document.querySelectorAll('.Container_Item')
    if (cont) {
        cont.forEach(function (remover) {
            remover.remove()
        })
    }

    var getitem = document.getElementsByClassName("Informacoes")[0]
    getitem.style.display = 'none'

    var divC = document.getElementsByClassName("Adicionar")[0]
    divC.style.display = 'flex';

    var Select = document.querySelector('#Select');
    var Select2 = document.querySelector('#Select2');

    if (Select) {
        Select.style.display = 'none';
        Select2.style.display = 'none';
    }

}


function Pesquisar() {




}