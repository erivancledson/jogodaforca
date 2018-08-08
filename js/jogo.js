const criaJogo = sprite => {
   //let quando recebe uma atribuição
    let palavraSecreta = '';
    let lacunas = [];
    let etapa = 1;

    const ganhou =  () => {

        return lacunas.length 
        //
            ? !lacunas.some(function(lacuna) {
                return lacuna == '';
            })
            : false;
    };

    const perdeu =  () =>  sprite.isFinished();
    

    const ganhouOuPerdeu =  () => ganhou() || perdeu();
    

    const reinicia =  () => {

        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    const processaChute =  chute => {
        if(!chute.trim()) throw Error('Chute inválido');
         //expressão regular
         const exp = new RegExp(chute, 'gi');
          let resultado, acertou = false;
        
        while(resultado = exp.exec(palavraSecreta)) {
            //acertou ele recebe o chute e ver a posição que ele está
            acertou = lacunas[resultado.index] = chute;
        }
         //nao acertou a imagem avança
        if(!acertou) sprite.nextFrame();
    };

    const criaLacunas =  () => {

        for(let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    const proximaEtapa =  () =>   etapa = 2;
    

    const setPalavraSecreta =  palavra  => {
       if(!palavra.trim()) throw Error('Palavra secreta inválida');
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    const getLacunas =  () =>  lacunas;
    

    const getEtapa =  () =>  etapa;
    

    return {

        setPalavraSecreta, 
        getLacunas,
        getEtapa, 
        processaChute,
        ganhou, 
        perdeu,
        ganhouOuPerdeu, 
        reinicia
    };
};