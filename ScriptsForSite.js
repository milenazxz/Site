function validateForm() {
    console.log("Проверка формы начата...");

    // Получаем значения полей формы
    const name = document.getElementById("name").value.trim();
    const telnumber = document.getElementById("telnumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const addressSelect = document.getElementById("addressSelect").value.trim();

    // Проверяем, заполнены ли все поля
    if (name && telnumber && email && addressSelect) {
        console.log("Все поля заполнены, показываем модальное окно.");

        // Инициализируем и показываем модальное окно
        const modal = new bootstrap.Modal(document.getElementById('ModalForForm'));
        modal.show();
    } else {
        console.log("Не все поля заполнены.");
        alert("Пожалуйста, заполните все обязательные поля.");
    }
}