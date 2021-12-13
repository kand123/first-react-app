Studio Ghibli Films

This is my first React app. I wanted to showcase the Studio Ghibli Films.
Deployed using Netlify Functions to retrieve API data from https://ghibliapi.herokuapp.com/#
UI elements from the MUI version 5 package

Final project requirements: 

1. Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists. Map here: https://github.com/kand123/first-react-app/blob/main/src/pages/FilmCard.js and Find here: https://github.com/kand123/first-react-app/blob/main/src/pages/FilmDetails.js
2. Encapsulate your code as React functional components. Menu bar, film card, etc: https://github.com/kand123/first-react-app/blob/main/src/App.js
3. Work with command-line tools and NPM to create and manage your project within a real development toolset. https://github.com/kand123/first-react-app/blob/main/package.json
4. Allow communication between components using props and the Context API. Context: https://github.com/kand123/first-react-app/blob/main/src/contexts/GhibliContext.js and passing through props from film card https://github.com/kand123/first-react-app/blob/main/src/pages/FilmCard.js to the film card contents https://github.com/kand123/first-react-app/blob/main/src/components/FilmContent.js
5. Present a form for user input that provides useful form validation and feedback for at least 3 data input items (e.g. name, password). https://github.com/kand123/first-react-app/blob/main/src/components/login/SignupForm.js
6. Create at least 5 custom components and use them within at least two of your other components. https://github.com/kand123/first-react-app/tree/main/src/components
7. Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project. (In process)
8. Connect to a server using Netlify functions and display retrieved data including at least 5 item details (accessed by details route) in your UI.Netlify functions: https://github.com/kand123/first-react-app/blob/main/netlify/functions/ghiblifilmdata.js and data passed to the film card: https://github.com/kand123/first-react-app/blob/main/src/pages/FilmCard.js
9. Provide at least 3 different routes with navigation between them using React Router. (https://github.com/kand123/first-react-app/blob/main/src/App.js)
10. Manage your application's general and signup/login Authentication state using Hooks and the Context API. Used Netlify and the react-netlify-identity-go-true with useIdentityContext hook https://github.com/kand123/first-react-app/blob/main/src/components/login/SignupForm.js
11. Structure, document, and deploy your final project code according to common industry practices. 


You can see this React app at http://mystudioghiblifilms.netlify.app 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
