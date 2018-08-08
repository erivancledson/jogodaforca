const createSprite =  (selector) => {

    const moveFrame =  (from, to) => {
        //remove o atual e passa para o proximo
        $el.removeClass(from)
            .addClass(to);
    };

    const hasNext =  () =>  current + 1 <= last;
 

    const nextFrame =  ()  => {

        if(hasNext()) moveFrame(frames[current], frames[++current]);
    };
     //volta para o frame 0
     const reset =  () => {
       //tira do frame atual e coloca no inicio
        moveFrame(frames[current], frames[0]);
        current = 0;
    };

    const isFinished =  () => !hasNext();
   

    const $el = $(selector);

    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];
    //pega a primeira posição e ultima do array
    let current = 0;
    const last = frames.length -1;

    $el.addClass(frames[current]);

    return {
        nextFrame, 
        reset, 
        isFinished  
    };
};

