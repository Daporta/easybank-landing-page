import './App.css';
import icon from './Images/logo.svg';
import icon2 from './Images/logo2.svg';
import facebookLogo from './Images/social_media/icon-facebook.svg'; 
import youtubeLogo from './Images/social_media/icon-youtube.svg'; 
import twitterLogo from './Images/social_media/icon-twitter.svg';
import pinterestLogo from './Images/social_media/icon-pinterest.svg';
import instagramLogo from './Images/social_media/icon-instagram.svg';
import cellMockups from './Images/image-mockups.png';
import online from './Images/features/icon-online.svg';
import budgeting from './Images/features/icon-budgeting.svg';
import onboarding from './Images/features/icon-onboarding.svg';
import api from './Images/features/icon-api.svg';
import Articles from './articles.json'

function App() {
  return (
    <div className="App">
      <header className="header">
      <img src={icon} alt="easyBank-logo" className='header-easyBank-logo' />
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Carrers</a>
      </nav>
      <button className='header-button'>Request Invite</button>
      </header>
      <section className='hero'>
        <div className='left'>
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your EasyBank account will be a one-stop-<br/>
             shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className='hero-button'>Request Invite</button>
        </div>
        <div className='right'>
          <img src={cellMockups} alt="" />
        </div>
      </section>
      <section className='why-choose'>
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className='features'>
          <div className='feature'>
            <img src={online} alt="" />
            <h3>Online Banking</h3>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className='feature'>
            <img src={budgeting} alt="" />
            <h3>Simple Budgeting</h3>
            <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
          </div>
          <div className='feature'>
            <img src={onboarding} alt="" />
            <h3>Fast Onboarding</h3>
            <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className='feature'>
            <img src={api} alt="" />
            <h3>Open API</h3>
            <p>Manage your savings, investments, pension, and more from one account. tracking your money has never been easier.</p>
          </div>
        </div>        
      </section>
      <section className='latest-articles'>
        <h2>Latest Articles</h2>
        <div className='cards-holder'>
          {Articles.articles.map((article, i) => (
            <div key={i} className='article-card'>
              <img src={article.img} alt={article.alt} />
              <div className='card-info'>
                <h5>By {article.author}</h5>
                <h3>{article.title}</h3>
                <p>{article.info}</p>
              </div>
            </div>
          ))}
        </div>  
      </section>
      <footer>
        <section className='logo-social'>
          <img src={icon2} alt="easyBank-logo" className='footer-easyBank-logo' />
          <img src={facebookLogo} alt="facebook" />
          <img src={youtubeLogo} alt="youtube" />
          <img src={twitterLogo} alt="twitter" />
          <img src={pinterestLogo} alt="pinterest" />
          <img src={instagramLogo} alt="instagram" />
        </section>
        <section className='footer-links'>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Contact</a>
          <a href="/">Support</a>
          <a href="/">Blog</a>
          <a href="/">Privacy Policy</a>
        </section>
        <section className='button-rights'>
          <button className='footer-button'>Request Invite</button>
          <h5>© Easybank. All Rights Reserved</h5>
        </section>
      </footer>
    </div>
  );
}

export default App;
