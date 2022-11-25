// onreadystatechange="if (this.readyState === 'complete') this.onload()
      // Enter an API key from the Google API Console:
      //   https://console.developers.google.com/apis/credentials
var apiKey = 'AIzaSyA3kpl8-ADcJGXZKwCFCcsoUqaBToLGzE0';

// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the People API, so we load
// Discovery Doc found here: https://developers.google.com/people/api/rest/
var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/people/v1/rest"];

// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
var clientId = '879776196657-orknjs7fslof1fphcbq6u7an0c3qpqpu.apps.googleusercontent.com';

// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/people/v1/how-tos/authorizing
// for details.
var scopes = 'profile';

var authorizeButtonGo = document.querySelector('.authorize_button_go');
var signoutButton = document.querySelector('.signout_button_go');
var fbAythBtn = document.querySelector('.fb-login-button');

window.onload = function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: scopes,
        plugin_name:'App Name that you used in google developer console API' // Delete errors with "You create new client API"
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        authorizeButtonGo.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

function hideElements (){
    let hiddenAttar = document.querySelectorAll('.authorize_button_go, .fb-login-button, .not_auth_client, .auth_txt, .wrapper_person_txt')
    for (let i = 0; i < hiddenAttar.length; i++) {
        hiddenAttar[i].style.display = 'none'
    }
  }
  
function showElements (){
    let hiddenAttar = document.querySelectorAll('.authorize_button_go, .fb-login-button, .not_auth_client, .auth_txt, .wrapper_person_txt')
    for (let i = 0; i < hiddenAttar.length; i++) {
        hiddenAttar[i].style.display = 'block'
    }
  }
function updateSigninStatus(isSignedIn) {
    let notAuthClientWrapp = document.querySelector('.not_auth_client') // Wrapper of registration fields
    let aythClientWrapp = document.querySelector('.auth_client')  // Wrapper Auth person
    let txtAuth = document.querySelector('.auth_txt')
    if (isSignedIn) {
        hideElements()
        signoutButton.style.display = 'block';
        makeApiCall();
        aythClientWrapp.style.display='block'
    } else {
        showElements()
        signoutButton.style.display = 'none';
        aythClientWrapp.style.display='none'
    }
}

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall(){
    gapi.client.people.people.get({
        'resourceName': 'people/me',
        'personFields': 'emailAddresses,names,photos,locales', // Elemets of People API 
    }).then(function(resp) {
        let authClientWrapper = document.querySelector('.auth_client'); // Wrapper Auth person
        authClientWrapper.innerHTML = `
        <p class='client_tit_txt'> Вітаю, ${resp.result.names[0].displayName}</p>
        <img class='img_auth_client' src='${resp.result.photos[0].url}'>
        <p class='client_email'>${resp.result.emailAddresses[0].value}</p>
        `
    });
}
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}
