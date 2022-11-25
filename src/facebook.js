let signinFb = document.querySelector('.fb-login-button')
let signOffFb = document.querySelector('.signout_button_fb')
let authFbUser = document.querySelector('.auth_client')
let notAuthClientWrapp = document.querySelector('.not_auth_client')
  // This is called with the results from from FB.getLoginStatus().

  function hideAuthЕlements (){
    let hiddenAttar = document.querySelectorAll(' .fb-login-button, .not_auth_client, .auth_txt, .authorize_button_go')
    for (let i = 0; i < hiddenAttar.length; i++) {
        hiddenAttar[i].style.display = 'none'
    }
    authFbUser.style.display = 'block'
    
  }
  function showAuthElements(){
    let hiddenAttar = document.querySelectorAll(' .fb-login-button, .not_auth_client, .auth_txt, .authorize_button_go')
    for (let i = 0; i < hiddenAttar.length; i++) {
        hiddenAttar[i].style.display = 'block'
    }
    signOffFb.style.display='none'
    authFbUser.style.display = 'none'
  }
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
        hideAuthЕlements()
        testAPI();
        signOffFb.style.display = 'block'
        signOffFb.onclick = () => {
            showAuthElements()
        }
    } else {
      // The person is not logged into your app or we are unable to tell.

    }
  }

  window.checkLoginState = checkLoginState
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
        appId      : '840920393911003',
        cookie     : true,  // enable cookies to allow the server to access 
        xfbml      : true,  // parse social plugins on this page
        version    : 'v15.0' // Specify the Graph API version to use
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    FB.api('/me', function(response) {
      authFbUser.innerHTML =
        'Thanks for logging in, ' + response.name + '!' + ' ' + response.email;
    });
  }