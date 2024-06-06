document.querySelector('#signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    
    const emailInput = document.querySelector("#email");
    const email = emailInput.value;
    const nodoMessage = document.querySelector('.emailForm');
    let errorMessage = document.querySelector('.errorMessage');

    if (errorMessage) {
        errorMessage.remove();
    }

    if (!email.includes('@')) {
        errorMessage = document.createElement("span");
        errorMessage.textContent = "Valid email required";
        errorMessage.style.color = "hsl(4, 100%, 67%)";
        emailInput.style = "background: hsl(6, 69%, 91%); border-color: hsl(4, 100%, 67%);";
        emailInput.classList.add("email");
        errorMessage.classList.add('errorMessage');
        nodoMessage.insertAdjacentElement("afterbegin", errorMessage);
    } else {
        window.location.href = "valido.html";
    }
});
