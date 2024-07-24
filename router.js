import { renderLandingPage, renderQuizGenerator, renderSavedQuizzes ,previewQuiz } from './main.js'; 

const routes = {
  '/': renderLandingPage,
  '/templates': renderSavedQuizzes,
  '/create': renderQuizGenerator ,
  '/preview': previewQuiz
};

function getRoute() {
  const path = window.location.pathname;
  return { path };
}

export function navigate(path) {
  history.pushState({}, "", path); 
  router();
}

export function router() {
  const { path } = getRoute();
  const route = routes[path] || renderLandingPage; 
  route();
}

window.addEventListener('popstate', router); 

