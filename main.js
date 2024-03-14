        $(document).ready(function () {
            // Desplazamiento suave al hacer clic en los enlaces de la barra de navegación
            $('a[href^="#"]').not('[href="#portfolioCarousel"]').on('click', function (event) {
                var target = $($(this).attr('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            });

            // Resaltar el enlace de la barra de navegación correspondiente a la sección visible
            $(window).on('scroll', function () {
                var scrollDistance = $(window).scrollTop();
                // Ajusta el valor '100' según la altura de tu barra de navegación
                $('section').each(function (i) {
                    if ($(this).position().top <= scrollDistance + 100) {
                        $('.navbar-nav a.active').removeClass('active');
                        $('.navbar-nav a').eq(i).addClass('active');
                    }
                });


            }).scroll();
        });

        $(document).ready(function () {
            var lastScrollTop = 0;
            var navbarHeight = $('.navbar').outerHeight();
            var documentHeight = $(document).height();
            var windowHeight = $(window).height();
            var isMouseNearNavbar = false; // Flag para rastrear si el mouse está cerca de la barra de navegación

            $(window).scroll(function () {
                var scrollTop = $(this).scrollTop();

                if (!isMouseNearNavbar) {
                    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
                        // Si el scroll es hacia abajo y se ha superado la altura de la barra de navegación, ocultarla
                        $('.navbar').fadeOut('fast');
                    } else {
                        // Si el scroll es hacia arriba o hacia abajo, o se encuentra en la parte superior de la página, mostrar la barra de navegación
                        $('.navbar').fadeIn('fast');
                    }

                    // Si se llega al final de la página, mostrar la barra de navegación
                    if (scrollTop + windowHeight == documentHeight) {
                        $('.navbar').fadeIn('fast');
                    }
                }

                lastScrollTop = scrollTop;
            });

            // Mostrar la barra de navegación si el mouse se acerca a ella
            $('.navbar').mouseenter(function () {
                isMouseNearNavbar = true;
                $('.navbar').fadeIn('fast');
            });

            // Mantener visible la barra de navegación si se hace clic en uno de sus botones
            $('.navbar').on('click', 'a', function () {
                isMouseNearNavbar = true;
                $('.navbar').fadeIn('fast');
            });

            // Mostrar la barra de navegación si el mouse se mueve cerca de donde estaba
            $(document).mousemove(function (e) {
                if (e.clientY <= navbarHeight) {
                    isMouseNearNavbar = true;
                    $('.navbar').fadeIn('fast');
                } else {
                    isMouseNearNavbar = false;
                }
            });
        });

        function validateForm() {
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var mensaje = document.getElementById("mensaje").value;

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, complete todos los campos.");
                return false;
            }

            alert("Información del formulario:\nNombre: " + nombre + "\nCorreo Electrónico: " + email + "\nMensaje: " + mensaje);
            return true;
        }
