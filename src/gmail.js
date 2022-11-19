window.handleCredentialResponse = (response) => {
    let person = response.getBasicProfile();
    console.log('ID: ' + person.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + person.getName());
    console.log('Image URL: ' + person.getImageUrl());
    console.log('Email: ' + person.getEmail());
  }
const button = document.getElementById('signout_button');
    button.onclick = () => {
    google.accounts.id.disableAutoSelect();
}