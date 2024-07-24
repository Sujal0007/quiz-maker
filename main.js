import './style.css';
import { renderLandingPage } from './landpage.js'; 
import { renderQuizGenerator } from './createquiz.js'; 
import { renderSavedQuizzes,previewQuiz } from './preview.js'; 
import { router } from './router.js'; 

export { renderLandingPage, renderQuizGenerator, renderSavedQuizzes , previewQuiz };

document.addEventListener('DOMContentLoaded', () => {
    router(); 
});


