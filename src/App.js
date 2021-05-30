import "./App.css";
import ImgLogo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={ImgLogo} className="header__img" />
        <div className="header__button">
          <button className="header__button_one">HOW WE WORK</button>
          <button className="header__button_two">BLOG</button>
          <button className="header__button_tree">ACCOUNT</button>
          <button className="header__button_four"> VIEW PLANS</button>
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">
          Humanizing <br />
          your insicurance.
        </h1>
        <p className="card__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sunt
          facilis odio inventore repellat ratione ipsum obcaecati voluptatem
          quis aspernatur ex tenetur, impedit unde deserunt perspiciatis qui
          itaque eligendi enim.
        </p>
        <button className="card__button">VIEW PLANS</button>
      </div>
    </div>
  );
}

export default App;
