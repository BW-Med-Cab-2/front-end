# front-end

App is located at:
https://medcabinetapp.netlify.app/

Purpose of the App:
-Med Cabinet exists to connect prospective clients with strains of cannabis, based off of symptoms or ailments they have.
  -Users are able to register, login and view their Dashboard.
  -Dashboard contains a link to the Question Form, where users can submit their symptoms to receive recommendations
  on strains that will help them.
  
App Route:
  /register directs users to registration form.
  /login directs users to login form.
  / directs users to Home page.
  /protected is the dashboard access; is protected by, and unique to, user's token.
  /tempform is the questionnaire form; it is accessible without token, 
but still requires token, to return to dashboard and update results.
