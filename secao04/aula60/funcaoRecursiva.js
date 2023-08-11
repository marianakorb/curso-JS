// executa o código dela e se chama de volta

function recursiva(max) {

    if(max > 10) return;
    console.log(max);
    max++
    recursiva(max);
}

recursiva(5);