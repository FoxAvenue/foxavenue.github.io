    // Функция для переключения темы
    function toggleLight() {
        document.body.classList.toggle("light");
        const ball = document.querySelector(".switch-icon .ball");
        ball.classList.toggle("active");
    }

    // Функция для добавления стилей в документ
    function addStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .loader-cont {
                transition: transform 0.5s ease; /* Плавный переход при изменении трансформации */
            }
            .loader-exit {
                transform: translateY(-100%); /* Перемещаем лоадер вверх */
            }
        `;
        document.head.appendChild(style); // Добавляем стили в head документа
    }

    // Скрыть лоадер через 1.5 секунды с анимацией уезжания
    document.addEventListener('DOMContentLoaded', () => {
        const loaderCont = document.getElementById('loader-cont');

        // Убедитесь, что лоадер существует
        if (loaderCont) {
            addStyles(); // Добавляем стили

            // Ждем 1.5 секунды, затем добавляем класс для анимации
            setTimeout(() => {
                loaderCont.classList.add('loader-exit'); // Добавляем класс для анимации уезжания

                // Скрываем лоадер после завершения анимации
                setTimeout(() => {
                    loaderCont.style.display = 'none'; // Скрываем лоадер
                }, 500); // Длительность анимации
            }, 1500); // 1500 миллисекунд = 1.5 секунды
        }
    });

