// core
import React from "react";

// styles
import "./ubderHeaderInfo.css";
import {useTranslation} from "react-i18next";

export const UnderHeaderInfo = () => {

    const { t, i18n } = useTranslation();

    return <div className="text-center underHeader">
        <h1>
            {t('description1')}
        </h1>
        <span>
            {t('description2')}
        </span>
    </div>
}