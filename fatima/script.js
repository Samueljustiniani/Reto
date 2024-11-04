window.onscroll = function() {
        var header = document.querySelector("header");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("transparent"); // Agregar clase al hacer scroll
        } else {
            header.classList.remove("transparent"); // Quitar clase al volver al top
        }
    };

