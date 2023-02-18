//
let passwordFields = document.querySelectorAll('.input-password');

passwordFields.forEach(group => {
  let passField = group.querySelector('input[type=password].form-control');
  let checkbox = group.querySelector('.toggle-btn input[type=checkbox]');
  let icon = group.querySelector('.toggle-btn label i');
  checkbox.addEventListener('change', (event) => {
    let isChecked = event.target.checked;
    // icon.className = 'align-middle fa-solid ';
    // icon.className += isChecked ? 'fa-eye' : 'fa-eye-slash';
    icon.classList.toggle('fa-eye');
    passField.type = isChecked ? 'text' : 'password';
  });
});