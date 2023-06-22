const encontrarEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(json => {

            let estados = ''

            json.forEach(estado => {
            estados += `<option value=${estado.sigla}>${estado.nome}</option>`
            })

            console.log(estados)
            
            estado.innerHTML = estados
        })
}

encontrarEstados()

const encontrarCep = () => {
    let ceps = cep.value
    console.log(ceps)   
    fetch(`https://viacep.com.br/ws/${ceps}/json/`)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            preencherCampos(json)
        })
}


const preencherCampos = json => {
    logradouro.value = json.logradouro
    numero.focus()
    bairro.value = json.bairro
    estado.value = json.uf
    localidade.value = json.localidade
    
}

