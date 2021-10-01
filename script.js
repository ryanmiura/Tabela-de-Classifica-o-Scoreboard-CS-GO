var fallen = { nome: "Fallen", kills: 32, assists: 12, deaths: 8, plants: 5, defuses: 3, ckills: 0, kd: 0, diff: 0, score: 0 }
var simple = { nome: "S1mple", kills: 8, assists: 3, deaths: 32, plants: 2, defuses: 1, ckills: 0, kd: 0, diff: 0, score: 0 }
var jogadores = [fallen, simple]
var scoreBoard = document.querySelector(".scoreBoard")
var selectPlayerInfo = document.querySelector("#selectPlayerInfo")
var selectStatInfo = document.querySelector("#selectStatInfo")
var selectPlayerRemove = document.querySelector("#selectPlayerRemove")

function exibeJogadoresTela(jogadores) {
    selectPlayerInfo.innerHTML = null
    selectPlayerRemove.innerHTML = null
    for (var i = 0; i < jogadores.length; i++) {


        function calculaScore(jogador) {
            var score = jogador.kills * 2 + jogador.plants * 2 + jogador.defuses * 2 + jogador.assists + jogador.ckills
            return score
        }

        function calculaKD(jogador) {
            var kd = (jogador.kills / jogador.deaths).toFixed(2)
            return kd
        }

        function calculaDiff(jogador) {
            var diff = jogador.kills - jogador.deaths
            if (diff > 0) {
                diff = "+" + diff
            } else if (diff < 0) {
                diff = diff
            }
            return diff
        }

        jogadores[i].score = calculaScore(jogadores[i])
        jogadores[i].kd = calculaKD(jogadores[i])
        jogadores[i].diff = calculaDiff(jogadores[i])
        scoreBoard.insertAdjacentHTML("beforeend", "<tr><td>" + jogadores[i].nome + "</td>"
            + "<td>" + jogadores[i].kills + "</td>"
            + "<td>" + jogadores[i].assists + "</td>"
            + "<td>" + jogadores[i].deaths + "</td>"
            + "<td>" + jogadores[i].plants + "</td>"
            + "<td>" + jogadores[i].defuses + "</td>"
            + "<td>" + jogadores[i].ckills + "</td>"
            + "<td>" + jogadores[i].kd + "</td>"
            + "<td>" + jogadores[i].diff + "</td>"
            + "<td>" + jogadores[i].score + "</td></tr>")

        selectPlayerInfo.insertAdjacentHTML("beforeend", " <option value=" + i + ">" + jogadores[i].nome + "</option>")
        selectPlayerRemove.insertAdjacentHTML("beforeend", " <option value=" + i + ">" + jogadores[i].nome + "</option>")
    }
}

exibeJogadoresTela(jogadores)


function Adicionar() {
    var adicionarJogador = document.querySelector("#adicionarJogador").value
    if (adicionarJogador == "") {
        alert("Insira um nome para o Jogador")
    } else {
        var varAdicionarJogador = adicionarJogador.toLowerCase()
        var varAdicionarJogador = { nome: adicionarJogador, kills: 0, assists: 0, deaths: 0, plants: 0, defuses: 0, ckills: 0, kd: 0, diff: 0, score: 0 }
        jogadores.push(varAdicionarJogador)
        console.log("aaa")
        console.log(jogadores)
        var adicionarJogador = document.querySelector("#adicionarJogador").value = ""
        scoreBoard.innerHTML = null
        exibeJogadoresTela(jogadores)
    }
}

function Remover() {
    var selectRemove = document.querySelector("#selectPlayerRemove").value
    jogadores.splice(selectRemove,1)
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}

function MaisUm(){
   var selectPlayer = document.querySelector("#selectPlayerInfo").value
   var selectInfo = document.querySelector("#selectStatInfo").value
   
   if(selectInfo === "s_kills"){
       jogadores[selectPlayer].kills++
       scoreBoard.innerHTML=null
       exibeJogadoresTela(jogadores)
   }else if(selectInfo === "s_assists"){
    jogadores[selectPlayer].assists++
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}else if(selectInfo === "s_deaths"){
    jogadores[selectPlayer].deaths++
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}else if(selectInfo === "s_plants"){
    jogadores[selectPlayer].plants++
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}else if(selectInfo === "s_defuses"){
    jogadores[selectPlayer].defuses++
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}else if(selectInfo === "s_ckills"){
    jogadores[selectPlayer].ckills++
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)
}
document.querySelector("#selectPlayerInfo").value = selectPlayer
}


function MenosUm(){
    var selectPlayer = document.querySelector("#selectPlayerInfo").value
    var selectInfo = document.querySelector("#selectStatInfo").value
    
    if(selectInfo === "s_kills"){
        jogadores[selectPlayer].kills--
        scoreBoard.innerHTML=null
        exibeJogadoresTela(jogadores)
        
    }else if(selectInfo === "s_assists"){
     jogadores[selectPlayer].assists--
     scoreBoard.innerHTML=null
     exibeJogadoresTela(jogadores)
 }else if(selectInfo === "s_deaths"){
     jogadores[selectPlayer].deaths--
     scoreBoard.innerHTML=null
     exibeJogadoresTela(jogadores)
 }else if(selectInfo === "s_plants"){
     jogadores[selectPlayer].plants--
     scoreBoard.innerHTML=null
     exibeJogadoresTela(jogadores)
 }else if(selectInfo === "s_defuses"){
     jogadores[selectPlayer].defuses--
     scoreBoard.innerHTML=null
     exibeJogadoresTela(jogadores)
 }else if(selectInfo === "s_ckills"){
     jogadores[selectPlayer].ckills--
     scoreBoard.innerHTML=null
     exibeJogadoresTela(jogadores)
 }
 document.querySelector("#selectPlayerInfo").value = selectPlayer
 }

function Zerar(){
    for(var i = 0 ; i<jogadores.length; i++){
        jogadores[i].kills = 0
        jogadores[i].assists = 0
        jogadores[i].deaths = 0
        jogadores[i].plants = 0
        jogadores[i].defuses = 0
        jogadores[i].ckills = 0
    }
    scoreBoard.innerHTML=null
    exibeJogadoresTela(jogadores)

}