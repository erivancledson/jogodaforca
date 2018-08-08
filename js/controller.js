const criaController = jogo => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = () => {

        $lacunas.empty();
        jogo.getLacunas().forEach(lacuna =>
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas));
    };

    const mudaPlaceHolder = texto => 
        $entrada
            .val('')
            .attr('placeholder', texto);

    const guardaPalavraSecreta = () => {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    const leChute =  () => {

        var chute = $entrada.val().trim().substr(0, 1);
        $entrada.val('');
        jogo.processaChute(chute);
        exibeLacunas();

        if (jogo.ganhouOuPerdeu()) {

            setTimeout(() => {
                if (jogo.ganhou()) {
                    alert('Ganhou!');
                } else if (jogo.perdeu()) {
                    alert('Uma pena, tente novamente.');
                }
                jogo.reinicia();
                reinicia();
            }, 200);
        }
    };

    const reinicia = () => {

        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
        jogo.reinicia();
    };

    const inicia = () => {

        $entrada.keypress(event => {

            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return { inicia: inicia };
};