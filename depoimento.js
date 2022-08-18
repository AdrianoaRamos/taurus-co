const depoimento = [
    {
        "nomeDepointe":"Adriano",
        "empresa":"Barbearia",
        "cargo":"Proprietário",
        "depo":"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }
]


const nomeBarber = depoimento[0].nomeDepointe
const empresaBarber = depoimento[0].empresa
const cargoBarber = depoimento[0].cargo
const depoimentoBarber = depoimento[0].depo

function TrocaDepoimento(){
    const trocaNomeBarber = document.getElementById("nomeDepointe")
    trocaNomeBarber.innerHTML = nomeBarber
    const trocaempresaBarber = document.getElementById("empresa")
    trocaempresaBarber.innerHTML = empresaBarber
    const trocacargoBarber = document.getElementById("cargo")
    trocacargoBarber.innerHTML = cargoBarber
    const trocadepoBarber = document.getElementById("depo")
    trocadepoBarber.innerHTML = depoimentoBarber
}