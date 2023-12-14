jQuery(document).ready(function($) {
    tab = $('.tabs h3 a');
  
    tab.on('click', function(event) {
      event.preventDefault();
      tab.removeClass('active');
      $(this).addClass('active');
  
      tab_content = $(this).attr('href');
      $('div[id$="tab-content"]').removeClass('active');
      $(tab_content).addClass('active');
    });
  
    // Initialize Google Sign-In
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID' // Replace with your Google API client ID
      });
    });
  
    // Create Google Sign-In button for Sign Up
    $('#google-sign-in-button-signup').click(function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        // Handle the Google Sign-In for Sign Up here
        console.log('Sign Up with Google successful.');
      });
    });
  
    // Create Google Sign-In button for Login
    $('#google-sign-in-button-login').click(function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        // Handle the Google Sign-In for Login here
        console.log('Login with Google successful.');
      });
    });
  });
  