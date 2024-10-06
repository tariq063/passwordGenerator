
function generatepass() {
    const length = 8;
    const charset = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890@#$%^&*()+=()?/<>.,"';
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('Password').value = password;
}

document.getElementById('copy-icon').onclick = function() {
    const passwordInput = document.getElementById('Password');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
};