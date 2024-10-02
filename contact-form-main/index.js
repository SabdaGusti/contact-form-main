document.getElementById('submit').addEventListener('click', function (event) {
    let isValid = true;
    event.preventDefault();
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const query = document.querySelector('input[name="query"]:checked');
    const checkBox = document.querySelector('input[name="check"]:checked');

    if (!firstName) {
        document.getElementById('first-nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('first-nameError').style.display = 'none';
    }

    if (!lastName) {
        document.getElementById('last-nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('last-nameError').style.display = 'none';
    }

    if (!email) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (!message) {
        document.getElementById('messageError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    if (!check) {
        document.getElementById('checkError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('checkError').style.display = 'none';
    }

    if (!query) {
        document.getElementById('queryError').style.display = 'inline';
    } else {
        document.getElementById('queryError').style.display = 'none';
    } 

    if (!checkBox) {
        document.getElementById('checkError').style.display = 'inline';
    } else {
        document.getElementById('checkError').style.display = 'none';
    }

    if (isValid){
        document.getElementById('pop-up').style.display = 'inline';
    }

    
});

document.getElementById('first-name').addEventListener('input', function () {
    document.getElementById('first-nameError').style.display = 'none';
});

document.getElementById('last-name').addEventListener('input', function () {
    document.getElementById('last-nameError').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function () {
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('query').addEventListener('input', function () {
    document.getElementById('queryError').style.display = 'none';
});

document.getElementById('check').addEventListener('input', function () {
    document.getElementById('checkError').style.display = 'none';
});

document.getElementById('message').addEventListener('input', function () {
    document.getElementById('messageError').style.display = 'none';
});

document.querySelectorAll('.radio-button input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        // Hapus kelas 'selected' dari semua elemen .radio-button
        document.querySelectorAll('.radio-button').forEach(function (rb) {
            rb.classList.remove('selected');
        });
        // Tambahkan kelas 'selected' ke elemen .radio-button yang dipilih
        this.parentElement.classList.add('selected');
    });
});
