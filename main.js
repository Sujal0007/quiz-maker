import './style.css';
import { renderLandingPage } from './landpage.js'; 
import { renderQuizGenerator } from './createquiz.js'; 
import { renderSavedQuizzes } from './preview.js'; 
import { navigate, router } from './router.js'; 

export { renderLandingPage, renderQuizGenerator, renderSavedQuizzes };

document.addEventListener('DOMContentLoaded', () => {
    router(); 
});


