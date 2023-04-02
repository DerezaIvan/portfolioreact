import "./header.css";
import avatrka from "../../img/icons/Ava-white.png"

const Header = () => {
  return (
    <header className="header">
      <img src={avatrka} alt="Фото Иван Дереза" className="header__img animate__animated animate__backInDown"/>
      <div className="header__wrapper animate__animated animate__backInDown">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Иван Дереза</em>
          </strong>
          <br />я фронтенд-разработчик.
        </h1>
        <div className="header__text">
          <p>Разрабатываю сайты и приложения</p>
        </div>
        <a
          href="https://spb.hh.ru/resume/85d570b1ff018ea7550039ed1f354149595532"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Открыть резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
