const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const formSingIn = document.getElementById('formSingIn');
const formSingUp = document.getElementById('formSingUp');

signUp.addEventListener('click', () => {
    signIn.classList.remove('active');
    signUp.classList.add('active');
    formSingUp.classList.remove('show');
    formSingIn.classList.add('show');
});
signIn.addEventListener('click', () => {
    signUp.classList.remove('active');
    signIn.classList.add('active');
    formSingIn.classList.remove('show');
    formSingUp.classList.add('show');
});