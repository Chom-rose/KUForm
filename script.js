document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('dropForm')
    const usernameInput = document.getElementById("username")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const subjectSelect = document.getElementById("subject")
    const confirmCheck = document.getElementById("confirm")
    const errParagraph = document.getElementById("error")

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        let errMessages = [];
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const subject = subjectSelect.value;
        const confirm = confirmCheck.checked;

        if (username.trim() === "") {
            errMessages.push("กรุณากรอก Username");
            usernameInput.classList.add("is-invalid");
        }
        if (email.trim() === "") {
            errMessages.push("กรุณากรอก Email");
            emailInput.classList.add("is-invalid");
        }
        if (password.trim() === "") {
            errMessages.push("กรุณากรอก Password");
            passwordInput.classList.add("is-invalid");
        }

        if (subject.trim() === "") {
            errMessages.push("กรุณากรอก Subject");
            subjectSelect.classList.add("is-invalid");
        }

        if (!confirm) {
            errMessages.push("กรุณายืนยันเงื่อนไข");
        }

        if (errMessages.length > 0) {
            errParagraph.innerHTML = errMessages.join("<br>");
        }

        usernameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        subjectSelect.classList.remove("is-invalid");
        confirmCheck.classList.remove("is-invalid");
    });
});