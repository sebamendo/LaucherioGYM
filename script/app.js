// FUNCION PARA QUE SE SELECCIOEN EL DIA ACTUAL
document.addEventListener('DOMContentLoaded', function () {
    function activateTabBasedOnDay() {
        const daysMap = {
            1: 'v-pills-inicio-tab', // Lunes
            2: 'v-pills-dp-tab',    // Martes
            3: 'v-pills-estudios-tab', // Miércoles
            4: 'v-pills-inicio-tab', // Jueves
            5: 'v-pills-dp-tab',    // Viernes
            6: 'v-pills-estudios-tab', // Sábado
            0: 'v-pills-inicio-tab'  // Domingo (se puede cambiar según la necesidad)
        };

        const today = new Date().getDay();
        const tabId = daysMap[today];

        if (tabId) {
            const tabElement = document.getElementById(tabId);
            const tabContentId = tabElement.getAttribute('href').substring(1);

            // Remove active classes
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

            // Add active classes
            tabElement.classList.add('active');
            document.getElementById(tabContentId).classList.add('show', 'active');
        }
    }

    activateTabBasedOnDay();
});

// FUNCION PARA QUE SE OPAQUE LA TARJETA AL MARCAR TODOS LOS CHECK
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.rutinas-card');

    cards.forEach(card => {
        const checkboxes = card.querySelectorAll('.series-checkbox');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if ([...checkboxes].every(cb => cb.checked)) {
                    card.classList.add('opaque');
                } else {
                    card.classList.remove('opaque');
                }
            });
        });
    });
});

// FUNCION PARA QUE PASE AL SIGUIENTE CARD AL MARCAR TODOS LOS CHECK
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.rutinas-card');

    cards.forEach((card, index) => {
        const checkboxes = card.querySelectorAll('.series-checkbox');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if ([...checkboxes].every(cb => cb.checked)) {
                    card.classList.add('darkened');

                    const nextCard = cards[index + 1];
                    if (nextCard) {
                        nextCard.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    card.classList.remove('darkened');
                }
            });
        });
    });
});