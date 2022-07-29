//Efeito Matrix
var canvas = document.querySelector('.canvas');
        var ctx = canvas.getContext('2d'); //definindo o canvas

        //pega dados sobre o tamanho da tela que será exibido
        canvas.height = window.innerHeight; //define a altura da tela do usuário
        canvas.width = window.innerWidth; //define o comprimento da tela do usuário

        var texts = '0123456789asbdfqfkmcwaldsvlsdlv'.split(''); //define a string em uma array
        var fontSize = 16;
        var columns = canvas.width / fontSize; // divide o comprimento em 16 partes
        var drops = [];
        for(var x = 0; x < columns; x++){
            drops[x] = 1;
        }
        function draw(){
            ctx.fillStyle = 'rgba(0,0,0,0.05)'; //cor do fundo
            ctx.fillRect(0,0,canvas.width,canvas.height); // desenhando o canvas
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px arial';
            for(var i=0; i < drops.length; i++){

                var text = texts[Math.floor(Math.random()*texts.length)]; //selecionando uma parte aleatória da array texts
                ctx.fillText(text,i*fontSize,drops[i]*fontSize); // renderizar a cor das letras com gradiente

                if (drops[i]*fontSize > canvas.height || Math.random() > 0.95){
                    drops[i] = 0; // vai gerar o apagamento das letras na próxima geração do loop
                }

                drops[i]++;
            }
        }
        setInterval(draw,33);

//Relógio
function verificar_dia(){ //define o dia da semana com sua string correspondente
    var data = new Date();
    var diaSem = data.getDay();
    switch (diaSem) {
        case 0:
            var semana = 'Domingo';
            break;
        case 1:
            var semana = 'Segunda-feira';
            break;
        case 2:
            var semana = 'Terça-feira';
            break;
        case 3:
            var semana = 'Quarta-feira';
            break;
        case 4:
            var semana = 'Quinta-feira';
            break;
        case 5:
            var semana = 'Sexta-feira';
            break;
        case 6:
            var semana = 'Sábado';
            break;
        default:
            var semana = '[ERRO] Dia inválido!';
            break;
    }
    return semana;
}
function verificar_mes(){ // define a string do mes conforme a sua ordem na array ".getMonth"
    var data = new Date();
    var month = data.getMonth();
    switch (month) {
        case 0:
            var mes = 'Janeiro';
            break;
        case 1:
            var mes = 'Fevereiro';
            break;
        case 2:
            var mes = 'Março';
            break;
        case 3:
            var mes = 'Abril';
            break;
        case 4:
            var mes = 'Maio';
            break;
        case 5:
            var mes = 'Junho';
            break;
        case 6:
            var mes = 'Julho';
            break;
        case 7:
            var mes = 'Agosto';
            break;
        case 8:
            var mes = 'Setembro';
            break;
        case 9:
            var mes = 'Outubro';
            break;
        case 10:
            var mes = 'Novembro';
            break;
        case 11:
            var mes = 'Dezembro';
            break;
        default:
            var mes = '[ERRO] Mês inválido!';
            break;
    }
    return mes;
}
function Relogio(){ 
    var data = new Date();
    var ano = data.getFullYear();
    var mesDoAno = verificar_mes();
    var diaDoMes = data.getDate();
    var diaDaSemana = verificar_dia();
    var hora = data.getHours();
    var minuto = data.getMinutes();
        if (minuto < 10){
            minuto = "0" + minuto;
        }
    var segundo = data.getSeconds();
        if (segundo < 10){
            segundo = "0" + segundo;
        }

    //formando a string final que aparecerá na div
    var tempo_total = `${hora}:${minuto}:${segundo}<br><br>${diaDaSemana}<br><br>Dia ${diaDoMes} de ${mesDoAno} de ${ano}`;
    const rel = document.querySelector("[data-relogio]"); //captando pela variável "rel" uma div através do elemento data-relogio
    rel.innerHTML = tempo_total;
}
setInterval(()=> {Relogio()}, 500); // iniciando o relógio com um contador para atualizar conforme o tempo passa