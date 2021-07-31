import React from "react";
import { Link as LinkS } from "react-scroll";
import profileImg from "../../img/profile.png";

const InfoSection = () => {
    return (
        <div className="info-section" id="info">
            <div className="info-section-image">
                <div className="info-section-container">
                    <div className="info-section-wrapper">
                        <img src={profileImg} alt="profile" />
                    </div>
                    <div className="info-section-content">
                        <h1>O mnie</h1>
                        <p>
                            Nazywam się Dawid Kowalewski i jestem inżynierem
                            budownictwa. Specjalizuję się w tworzeniu
                            realistycznych wizualizacji budynków jak i ich
                            wnętrz. Wizualizacje tworzone są indywidualnie na
                            potrzeby klienta.
                        </p>
                        <LinkS
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            className="info-section-content-button"
                        >
                            dowiedz się więcej
                        </LinkS>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
