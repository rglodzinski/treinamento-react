import React from "react";
import { DtpHeader, DtpContent, DtpContentContainer, DtpPageHeader, DtpButton } from "dtp-react-components";
import "starscream-theme/dist/css/default.min.css";
import "libicons/libicons/style.css";

const DtpReactComponents = () => {

    const appInfo = {
        firstName: "Treinamento",
        lastName: `React`,
        owner: "Coordenação de Gestão de Padrões de Desenvolvimento - COPD"
    };

    const homeHeader = <DtpPageHeader title="Página Inicial" />;

    return (
        <div className="default-theme">
            <DtpHeader homeUrl="/" appInfo={appInfo} />
            <DtpContent>
                <DtpContentContainer pageHeader={homeHeader}>
                    <DtpButton>Botão do Dtp-React-Components</DtpButton>
                </DtpContentContainer>
            </DtpContent>
        </div >
    );
};

export default DtpReactComponents;
