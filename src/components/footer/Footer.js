import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";

import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/navi_azered" target="_blank" rel="noreferrer"><img src={vk}
                                                                                                               alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://instagram.com/ivan_dereza?igshid=YmMyMTA2M2Y="
                                                        target="_blank" rel="noreferrer"><img src={instagram}
                                                                             alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/DerezaIvan" target="_blank" rel="noreferrer"><img
                            src={gitHub} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Иван Дереза</p>
                    </div>
                </div>
            </div>
        </footer>
    )
        ;
}

export default Footer;