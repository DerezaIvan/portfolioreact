const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1 animate__animated animate__slideInDown">
          Контакты
        </h1>
        <ul className="content-list">
          <li className="content-list__item animate__animated animate__zoomInDown">
            <h2 className="title-2"> Местоположение</h2>
            <p> Санкт-Петербург, Россия</p>
          </li>
          <li className="content-list__item animate__animated animate__zoomInDown">
            <h2 className="title-2"> Telegram</h2>
            <p>
              <a
                href="https://t.me/ivan_dereza"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Ivan_dereza
              </a>
            </p>
          </li>
          <li className="content-list__item animate__animated animate__zoomInUp">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a
                href="https://wa.me/7999297092"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                +7 (999) 219-70-92
              </a>
            </p>
          </li>
          <li className="content-list__item animate__animated animate__zoomInUp">
            <h2 className="title-2">Email</h2>
            <p>
              <a
                href="mailto:dereza2012@yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                dereza2012@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Contacts;
