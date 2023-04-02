import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item animate__animated animate__backInLeft">
              <h2 className="title-2">Фронтенд</h2>
              <p>
                HTMl, CSS, Адаптивная вёрстка, Кроссбраузерная вёрстка,
                Bootstrap, Gulp, JavaScript, JQuery, JQueryUI
              </p>
            </li>
            <li className="content-list__item animate__animated animate__backInRight">
              <h2 className="title-2">Бэкенд</h2>
              <p>NodeJS, PHP</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
