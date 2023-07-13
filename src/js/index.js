      //mostrar informaçoes console.()

  const personagens=  document.querySelector(('.persongens'));
  
  personagem.forEach((personagens) => {
    personagens.addEventListener('mouseenter', () => {
        personagens.classList.add('selecionado');
        const personagemSelecionado = document.querySelector('.selecionado');
        personagensSelecionado.classList.remove('selecionado');

        personagens.classList.add('selecionado')

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        const idPersonagem = personagens.attributes.id.value;
        imagemPersonagemGrande.src= "./ser/imagens/card-${idPersonagem}.pgn";

        const nomePersonagem =document.gatElementsByld('nomepersonagem');

        nomePersonagem.innerText= personagens.getAttribute('data-name');

        

    })
})

