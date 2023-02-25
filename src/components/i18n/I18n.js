import React from "react";
import { useTranslation } from "react-i18next";

import { Brasil, Eua } from "../../assets";


const I18n = () => {
    const { i18n } = useTranslation()


    function handleChangeLanguage(language) {
      i18n.changeLanguage(language)
      
    }

    const selectedLanguage = i18n.language
      return (
        <div>
          <button
            className="button__language"
            onClick={() => handleChangeLanguage('pt-BR')}> 
            <img src={Brasil} className="img__language" />
          </button>
          <button 
            className="button__language"
            onClick={() => handleChangeLanguage('en-US')}> 
            <img src={Eua} className="img__language"/>
          </button>
        </div>
         
      ) 
} 

export default I18n;