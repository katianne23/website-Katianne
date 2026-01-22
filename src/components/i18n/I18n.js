import { useTranslation } from "react-i18next"; 
import { Brasil, Eua } from "../../assets";


const I18n = () => {
    const { i18n } = useTranslation()


    function handleChangeLanguage(language) {
        i18n.changeLanguage(language)

    }
    return (
        <div>
            <button
                className="button__language"
                onClick={() => handleChangeLanguage('pt-BR')}>
                <img src={Brasil} className="img__language" alt="Imagem Brasil" />
            </button>
            <button
                className="button__language"
                onClick={() => handleChangeLanguage('en-US')}>
                <img src={Eua} className="img__language" alt="Imagem Europa" />
            </button>
        </div>

    )
}

export default I18n;