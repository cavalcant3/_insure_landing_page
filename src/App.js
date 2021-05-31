import "./App.css";
import ImgLogo from "./images/logo.svg";
import ImgBody from "./images/image-intro-desktop.jpg";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="header">
          <img src={ImgLogo} className="header__img" />
          <div className="header__button">
            <button className="header__button_one">HOW WE WORK</button>
            <button className="header__button_two">BLOG</button>
            <button className="header__button_tree">ACCOUNT</button>
            <button className="header__button_four"> VIEW PLANS</button>
          </div>
        </div>
      </nav>
      <div className="card">
        <div className="card__text">
          <h1 className="card__title">
            Humanizing <br />
            your insicurance.
          </h1>
          <p className="card__subtitle">
            Get your life insurance coverage easier and faster. We blend our
            experties and technology to help you to find the plan that's right
            for you. Ensure you and your loved ones are protectede deserunt
            perspiciatis qui itaque eligendi enim.
          </p>
          <button className="card__button">VIEW PLANS</button>
          <img src={ImgBody} className="body_image" />
        </div>
      </div>
    </div>
  );
}

export default App;
