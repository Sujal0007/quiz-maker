import { navigate } from './router.js'; 

export function renderLandingPage() {
  const headTemp = `<header>
    <div class="left-head">
      <img id='logo' src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
    </div>
    <div class="center-head">
      <ul>
        <li id="homeBtn">Home</li>
        <li id="templatesBtn">Templates</li>
        <li>About</li>
        <li id='share'>Share</li>
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
      <button class="temp-btn" id='tempBtn'>Existing Quizzes<i class="fa-solid fa-angle-right"></i></button>
      <p><i class="fa-solid fa-check"></i> Used by 50 million+ people around the world</p>
    </div>
  </div>
   <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>Create Quiz Templates</h4>
                <ul>
                    <li><a href="#" id='footCreate'>Creae a quiz</a></li>
                    <li><a href="#" id='footTemp'>Templates</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Get the App</h4>
                <div class="app-icons">
                    <a href="https://play.google.com" target="_blank"><img src="https://cf.quizizz.com/img/landing/apple%20app%20store.png" alt="Play Store"></a>
                    <a href="https://www.apple.com/app-store/" target="_blank"><img src="https://cf.quizizz.com/img/landing/google%20play.png" alt="App Store"></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 QuizApp. All rights reserved.</p>
        </div>
    </footer>`;
  
  document.querySelector('#app').innerHTML = headTemp;

  document.getElementById('createBtn').addEventListener('click', function() {
    navigate('/create'); 
  });
  document.getElementById('templatesBtn').addEventListener('click', function() {
    navigate('/templates'); 
  });
  document.getElementById('tempBtn').addEventListener('click', function() {
    navigate('/templates'); 
  });
  document.getElementById('homeBtn').addEventListener('click', function() {
    navigate('/'); 
  });
  document.getElementById('logo').addEventListener('click', function() {
    navigate('/'); 
  });
  document.getElementById('share').addEventListener('click' , function(){
    shareViaAPI();
  })
  document.getElementById('footCreate').addEventListener('click', function() {
    navigate('/create'); 
  });
  document.getElementById('footTemp').addEventListener('click', function() {
    navigate('/templates'); 
  });
}

export function shareViaAPI(){
  console.log('inside api');
  const shareData = {
    title: "QUIZ",
    text: "Quiz Maker APP",
    url: "https://quizzmaker.netlify.app/",
  };
  
  console.log(shareData);
  // Share must be triggered by "user activation"
  debugger 
  (async () => {
    try {

      await navigator.share(shareData);     
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  })();
}