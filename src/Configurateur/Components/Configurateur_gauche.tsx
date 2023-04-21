import { useState } from "react";
import ModalChoix from "./modal_choix";
import { BASE_URL } from "../../constant/url";
import { Tcomposants } from "./tipage/Tcomposants";




export default function ConfigurateurGauche() {

    const [modalTitle, setModalTitle] = useState<string>("");
    const [types, setTypes] = useState<Tcomposants[]>([]);


    const handleButtonClick = (title: string) => {
        setModalTitle(title);

        fetch(`${BASE_URL}/components/type/${title}`)
            .then((response) => response.json())
            .then((data) => {
                setTypes(data.data);
            });
    };

    return (
        <>
            <div className=" mt-5 ">

                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Processeur")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Processeur
                        </button>
                    </h2>

                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Mere")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Mere
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Ventirad")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Ventirad
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Memoire-Vive(RAM)")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Memoire Vive RAM
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Graphique")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte Graphique
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Boitier")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Boitier
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Alimentation")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Alimentation
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("SSD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            SSD
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("HDD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            HDD
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Son")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Son
                        </button>
                    </h2>
                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Reseau")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Reseau
                        </button>
                    </h2>
                </div>
            </div>
            <ModalChoix modalTitle={modalTitle} types={types} />
        </>
    )
}


