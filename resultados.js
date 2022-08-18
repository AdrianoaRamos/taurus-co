const resultado = [
    {
        "numalcancados":"2.967",
        "alcance":"+244%",
        "numengajados":"91",
        "engajamento":"+93,6%",
        "numtotal":"945",
        "total":"+1,8%"
    },
    {
        "numalcancados":"1.420",
        "alcance":"+153%",
        "numengajados":"73",
        "engajamento":"+461%",
        "numtotal":"1.093",
        "total":"+3,4%"
    },
    {
        "numalcancados":"464",
        "alcance":"+160%",
        "numengajados":"9",
        "engajamento":"+50%",
        "numtotal":"1.824",
        "total":"+0,3%"
    }
]

const numAlcancadosDadosUm = resultado[0].numalcancados
const alcanceDadosUm = resultado[0].alcance
const numEngajadosDadosUm = resultado[0].numengajados
const engajamentoDadosUm = resultado[0].engajamento
const numTotalDadosUm = resultado[0].numtotal
const totalDadosUm = resultado[0].total

const numAlcancadosDadosDois = resultado[1].numalcancados
const alcanceDadosDois = resultado[1].alcance
const numEngajadosDadosDois = resultado[1].numengajados
const engajamentoDadosDois = resultado[1].engajamento
const numTotalDadosDois = resultado[1].numtotal
const totalDadosDois = resultado[1].total

const numAlcancadosDadosTres = resultado[2].numalcancados
const alcanceDadosTres = resultado[2].alcance
const numEngajadosDadosTres = resultado[2].numengajados
const engajamentoDadosTres = resultado[2].engajamento
const numTotalDadosTres = resultado[2].numtotal
const totalDadosTres = resultado[2].total




function ClienteUm(){
    const trocaNumAlcancadosDadosUm = document.getElementById("numalcancados")
    trocaNumAlcancadosDadosUm.innerHTML = numAlcancadosDadosUm
    const trocaNumAlcancadosTituloUm = document.getElementById("porcentagemalcancada")
    trocaNumAlcancadosTituloUm.innerHTML = alcanceDadosUm
    const trocaAlcanceDadosUm = document.getElementById("alcance")
    trocaAlcanceDadosUm.innerHTML = alcanceDadosUm
    const trocaNumEngajadosDadosUm = document.getElementById("numengajados")
    trocaNumEngajadosDadosUm.innerHTML = numEngajadosDadosUm
    const trocaEngajamentoDadosUm = document.getElementById("engajamento")
    trocaEngajamentoDadosUm.innerHTML = engajamentoDadosUm
    const trocaNumTotalDadosUm = document.getElementById("numtotal")
    trocaNumTotalDadosUm.innerHTML = numTotalDadosUm
    const trocaTotalDadosUm = document.getElementById("total")
    trocaTotalDadosUm.innerHTML = totalDadosUm
}

function ClienteDois(){
    const trocaNumAlcancadosDadosDois = document.getElementById("numalcancados")
    trocaNumAlcancadosDadosDois.innerHTML = numAlcancadosDadosDois
    const trocaAlcanceDadosDois = document.getElementById("alcance")
    trocaAlcanceDadosDois.innerHTML = alcanceDadosDois
    const trocaNumAlcancadosTituloDois = document.getElementById("porcentagemalcancada")
    trocaNumAlcancadosTituloDois.innerHTML = alcanceDadosDois
    const trocaNumEngajadosDadosDois = document.getElementById("numengajados")
    trocaNumEngajadosDadosDois.innerHTML = numEngajadosDadosDois
    const trocaEngajamentoDadosDois = document.getElementById("engajamento")
    trocaEngajamentoDadosDois.innerHTML = engajamentoDadosDois
    const trocaNumTotalDadosDois = document.getElementById("numtotal")
    trocaNumTotalDadosDois.innerHTML = numTotalDadosDois
    const trocaTotalDadosDois = document.getElementById("total")
    trocaTotalDadosDois.innerHTML = totalDadosDois
}

function ClienteTres(){
    const trocaNumAlcancadosDadosTres = document.getElementById("numalcancados")
    trocaNumAlcancadosDadosTres.innerHTML = numAlcancadosDadosTres
    const trocaNumAlcancadosTituloTres = document.getElementById("porcentagemalcancada")
    trocaNumAlcancadosTituloTres.innerHTML = alcanceDadosTres
    const trocaAlcanceDadosTres = document.getElementById("alcance")
    trocaAlcanceDadosTres.innerHTML = alcanceDadosTres
    const trocaNumEngajadosDadosTres = document.getElementById("numengajados")
    trocaNumEngajadosDadosTres.innerHTML = numEngajadosDadosTres
    const trocaEngajamentoDadosTres = document.getElementById("engajamento")
    trocaEngajamentoDadosTres.innerHTML = engajamentoDadosTres
    const trocaNumTotalDadosTres = document.getElementById("numtotal")
    trocaNumTotalDadosTres.innerHTML = numTotalDadosTres
    const trocaTotalDadosTres = document.getElementById("total")
    trocaTotalDadosTres.innerHTML = totalDadosTres
}