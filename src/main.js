import './styles/main.scss';
import './bootstrap.js';
import $ from "jquery"; // бібліотека jquery

// Форми
let regForm = document.querySelector('.register_form')
let autForm = document.querySelector('.autorization_form')

// Поля реєстрації
let loginReg = document.querySelector('.reg_login')
let ageReg = document.querySelector('.reg_age')
let passReg = document.querySelector('.reg_pass')
let passRegConfirm = document.querySelector('.reg_confirm_pass')

//Поля авторизації
let loginConfirm = document.querySelector('.autentification_login')
let passConfirm = document.querySelector('.autentification_pass')

// Кнопки
const register = document.querySelector('.register_btn')
const autorization = document.querySelector('.autorization_btn')
const loginBtn = document.querySelector('.enter_btn')
const registerLink = document.querySelector('.go_register')

// Текст відсутності користувача
const alert_txt = document.querySelector('.alert_txt')
// Авторизований користувач
const confirm_txt = document.querySelector('.confirmed_person')

let persons = []
const tasksTemp = localStorage.getItem('person');
if (tasksTemp && tasksTemp !== null) {
    try {
        persons = JSON.parse(tasksTemp);
    } catch (error) {
        console.log(error);
    }
}

function clearLoginForm(){
    loginConfirm.value = '' 
    passConfirm.value = ''
}
function showAuthForm(){
    autForm.style.display = 'flex'
    regForm.style.display = 'none'
}
function showRegistrForm(){
    autForm.style.display = 'none'
    regForm.style.display = 'flex'
}
function hideAlertTxt(){
    alert_txt.style.display = `none`
    confirm_txt.style.display = `none`
}

registerLink.onclick = () =>{
    clearLoginForm()
    showRegistrForm()
    alert_txt.innerHTML = ''
    hideAlertTxt()
}
autorization.onclick = () =>{
    showAuthForm()
}
loginBtn.onclick = () =>{
    let checkPersonPass = persons.find(person => person.login == loginConfirm.value.toLowerCase() && person.password != passConfirm.value.toLowerCase())
    let registerPerson = persons.find(person => person.login == loginConfirm.value.toLowerCase() && person.password == passConfirm.value.toLowerCase())
    if (registerPerson != undefined){
        confirm_txt.innerHTML = `Вітаю ${registerPerson.login}, авторизація пройшла успішно`
        confirm_txt.style.display = `block`
        alert_txt.style.display = `none`
        clearLoginForm()
    } else if (checkPersonPass != undefined){
        hideAlertTxt()
        alert('Невірно вказаний пароль користувача')
    } else {
        alert_txt.innerHTML = 'Користувача не знайдено'
        confirm_txt.style.display = `none`
        alert_txt.style.display = `block`
    }
}
register.onclick = () => {
    let registerPersonChek = persons.find(person => person.login == loginReg.value.toLowerCase())
    if (passReg.value == passRegConfirm.value.toLowerCase()) {
        if (loginReg.value == false && ageReg.value == false && passReg.value == false &&  passRegConfirm.value == false){
            alert('Необхідно заповнити всі поля')
        } else if (registerPersonChek){
            alert('Нажаль такий користувач вже є в системі')
        } else {
            let obj = {
                login: loginReg.value.toLowerCase(),
                age: ageReg.value,
                password: passReg.value.toLowerCase()
            }
            persons.push(obj)
            localStorage.setItem('person', JSON.stringify(persons))
            loginReg.value = ''
            ageReg.value = ''
            passReg.value = ''
            passRegConfirm.value = ''
            alert('Вітаємо, реєстрація успішна, перейдіть до входу')
            showAuthForm()
        }
    } else {
        alert('Паролі не співпадають')
    }
}