let elementosDuv = document.querySelectorAll('.duvida');

elementosDuv.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
    });
});

