const paineis = document.querySelectorAll(".painel")

paineis.forEach( function(painel){

  painel.addEventListener('click', function(e){

    const active = e.currentTarget // currentTarget repassa o elemento no qual foi clicado

    removeactive()

    active.classList.add('painel-active')
  })
}) 

function removeactive(){
    paineis.forEach( function(painel){
          painel.classList.remove('painel-active')
        })
}

/*

Foi criado uma constante que através do quereSelectorAll pegou todas as classes com nome de painel, logo após foi criado uma estrutura de repetição na qual é adicionado um avento de clique em cada elemento da classe painel e com o comando currentTarget é possivel retornar qual elemento foi clicado e assim proceguir com o código.


*/