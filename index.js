  const burger = document.getElementById('burger');
        const navLinks = document.getElementById('navLinks');
        const imgContainer = document.getElementById('imgContainer');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Скрываем/показываем изображение
            if (burger.classList.contains('active')) {
                imgContainer.style.opacity = '0';
                imgContainer.style.pointerEvents = 'none';
            } else {
                imgContainer.style.opacity = '1';
                imgContainer.style.pointerEvents = 'auto';
            }
        });

        // Close menu when clicking on a link (mobile)
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && window.innerWidth <= 768) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                // Показываем изображение обратно
                imgContainer.style.opacity = '1';
                imgContainer.style.pointerEvents = 'auto';
            }
        });

        // Close menu when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                // Показываем изображение обратно
                imgContainer.style.opacity = '1';
                imgContainer.style.pointerEvents = 'auto';
            }
        });

        // Button functionality (добавьте свою логику)
        document.getElementById('buyButton').addEventListener('click', () => {
            window.location.href = 'Product.html'
        });

        document.getElementById('readButton').addEventListener('click', () => {
          window.location.href = 'About.html'
        });