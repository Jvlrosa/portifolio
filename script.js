function sendEmail() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    if (name.trim() !== '') {
    alert(`Obrigado ${name} pelo contato`);
      nameInput.value = ''; // Limpar o campo de nome após o envio
    } else {
    alert('Por favor, insira seu nome.');
    }
}