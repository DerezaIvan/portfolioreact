import "./btnGitHub.css"
import gitHubIcon from "../../img/icons/gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return (
        <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
            <img src={gitHubIcon} alt="Гит Хаб"/>
            GitHub
        </a>
    );
}

export default BtnGitHub;