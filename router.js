import { renderLandingPage, renderQuizGenerator, renderSavedQuizzes } from './main.js'; // Imported render functions

const routes = {
  '/': renderLandingPage, // Defined route for landing page
  '/templates': renderSavedQuizzes, // Defined route for saved quizzes
  '/create': renderQuizGenerator // Defined route for quiz generator
};

function getRoute() {
  const path = window.location.pathname;
  return { path };
}

export function navigate(path) {
  history.pushState({}, "", path); // Created navigate function
  router();
}

export function router() {
  const { path } = getRoute();
  const route = routes[path] || renderLandingPage; // Created router function
  route();
}

window.addEventListener('popstate', router); // Set up popstate event listener

