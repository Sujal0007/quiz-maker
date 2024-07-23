import { renderQuizGenerator } from './createquiz';
import { renderSavedQuizzes } from './preview';
export function renderHeader(){
    const headTemp = `<header>
        <div class="left-head">
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg"  alt="Quizizz Logo" class="logo-image">
            </div>
            <div class="center-head">
                <ul>
                <li>Home</li>
                <li id="templatesBtn">Templates</li>
                <li>About</li>
                <li>Contact us</li>
                </ul>
        </div>
        <div class="right-head">
            <button class="login-btn">Login</button>
            <button class="sign-btn">Sign up</button>
        </div>
        
        </header>
        <div class='land-container'>
        <div class="land-detail">
            <h1>Free online <span>quiz maker</span></h1>
            <p>Make a quiz with different question types to engage students in a classroom, train employees at work, or play trivia with friends.</p>
            <button class="create-btn" id='createBtn'>Create a quiz <i class="fa-solid fa-angle-right"></i></button>
            <p>  <i class="fa-solid fa-check"></i>   Used by 50 million+ people around the world</p>
        </div>
        </div>`
        document.querySelector('#app').innerHTML +=headTemp;

        document.getElementById('createBtn').addEventListener('click', function() {
            renderQuizGenerator();
        });
        document.getElementById('templatesBtn').addEventListener('click', renderSavedQuizzes);
}
