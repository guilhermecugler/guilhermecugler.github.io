// Selecionar o modal
var modal = document.getElementById("myModal");

// Selecionar a imagem no modal
var modalImg = document.getElementById("modalImg");

// Selecionar as imagens dos projetos
var projetoImgs = document.querySelectorAll('.projeto-img');

// Adicionar o evento de clique para cada imagem
projetoImgs.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Selecionar o botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];

// Adicionar o evento de clique para o botão de fechar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal quando o usuário clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adicionar animação suave ao clicar nos links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
