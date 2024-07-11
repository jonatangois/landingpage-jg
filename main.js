document.addEventListener('DOMContentLoaded', function(){
    const boxApresentacao = document.querySelector('#apresentacao')
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    const anoNascimento = 1997
    const anoTrabalho = 2018
    var idade = anoAtual - anoNascimento
    var trabalho = anoAtual - anoTrabalho

    boxApresentacao.innerHTML = 
        'Olá, meu nome é <b>Jonatan Góis</b>. Tenho ' + idade + ' anos e trabalho na área de redes há mais de ' + trabalho + ' anos.<br><br>'
        + 'No entanto, minha verdadeira paixão está no desenvolvimento, especialmente no <b>desenvolvimento web</b>.<br><br>'
        + '<b>Tenho conhecimentos em HTML5, CSS3 e um pouco de JavaScript</b>. Este projeto foi desenvolvido para demonstrar meus conhecimentos básicos nessa área. A ideia surgiu para <b>preencher a lacuna de não ter experiências para apresentar em um portfólio</b>.'
})


//ADICIONA / REMOVE CLASSE PARA ESTILIZAR LINK DO NAV
window.addEventListener('scroll', function() {
    var linkInicio = document.getElementById("link-inicio")
    var linkExperiencia = document.getElementById('link-experiencia')
    var linkContato = document.getElementById('link-contato')
    var limiteInicio = 700
    var limiteExperiencia = 701
    var limiteContato = 1400

    if (window.scrollY <= limiteInicio) {
        linkInicio.classList.add('link-estilizado')
        linkExperiencia.classList.remove('link-estilizado')
        linkContato.classList.remove('link-estilizado')
    }else if( window.scrollY >= limiteExperiencia && window.scrollY< limiteContato){
        linkExperiencia.classList.add('link-estilizado')
        linkInicio.classList.remove('link-estilizado')
        linkContato.classList.remove('link-estilizado')
    }
    else{
        linkContato.classList.add('link-estilizado')
        linkInicio.classList.remove('link-estilizado')
        linkExperiencia.classList.remove('link-estilizado')
    }
});

/* ALTERANDO IMAGEM DE PRETA E BRANCA PARA COLORIDA */
document.addEventListener('DOMContentLoaded', function(){
    var imgColor1 = document.querySelector('.img-colorida1')
    var imgPb1 = document.querySelector('.img-pb1')
    var imgColor2 = document.querySelector('.img-colorida2')
    var imgPb2 = document.querySelector('.img-pb2')
    var imgColor3 = document.querySelector('.img-colorida3')
    var imgPb3 = document.querySelector('.img-pb3')

    imgPb1.addEventListener('mouseover', function(){
        imgPb1.classList.add('img-oculta')
        imgColor1.classList.remove('img-oculta')
    })
    imgPb1.addEventListener('mouseout', function(){
        imgPb1.classList.remove('img-oculta')
        imgColor1.classList.add('img-oculta')
    })

    imgPb2.addEventListener('mouseover', function(){
        imgPb2.classList.add('img-oculta')
        imgColor2.classList.remove('img-oculta')
    })
    imgPb2.addEventListener('mouseout', function(){
        imgPb2.classList.remove('img-oculta')
        imgColor2.classList.add('img-oculta')
    })

    imgPb3.addEventListener('mouseover', function(){
        imgPb3.classList.add('img-oculta')
        imgColor3.classList.remove('img-oculta')
    })
    imgPb3.addEventListener('mouseout', function(){
        imgPb3.classList.remove('img-oculta')
        imgColor3.classList.add('img-oculta')
    })
})

/*FUNÇÃO PARA MOSTRAR MAIS OPÇÕES NO PROJETOS*/
function verMais(){
    var btnVerMais = document.getElementById('btn-mostar-ver-mais')
    var btnVerMenos = document.getElementById('btn-mostar-ver-menos')
    var projetoLinha2 = document.getElementById('projeto-linha2')

    btnVerMais.addEventListener('click', function(){
        projetoLinha2.style.display = 'flex'
        btnVerMenos.style.display = 'block'
        btnVerMais.style.display = 'none'
    })

    btnVerMenos.addEventListener('click', function(){
        projetoLinha2.style.display = 'none'
        btnVerMenos.style.display = 'none'
        btnVerMais.style.display = 'block'
    })
}
verMais();

/* FUNÇÃO PARA ABRIR MODAL */
function abrirModal(){
    var boxProjetos = document.querySelectorAll('.projetos-thumb');
    var boxModal = document.getElementById('modal-projetos');
    var btnModal = document.getElementById('btn-modal');

    // Iterando sobre cada elemento da NodeList
    boxProjetos.forEach(function(boxProjeto) {
        boxProjeto.addEventListener('click', function(){
            boxModal.style.display = 'flex';
        });
    });

    btnModal.addEventListener('click', function(){
        boxModal.style.display = 'none';
    });
}
abrirModal();

document.addEventListener('DOMContentLoaded', function(){
    const novoEmail = document.querySelector('#link-email')
    const modalNovoEmail = document.querySelector('#box-formulario-email')
    const btnVoltar = document.querySelector('#btn-voltar-email')

    novoEmail.addEventListener('click', function(){
        modalNovoEmail.style.display = 'flex'
    })

    btnVoltar.addEventListener('click', function(){
        modalNovoEmail.style.display = 'none'
    })
})