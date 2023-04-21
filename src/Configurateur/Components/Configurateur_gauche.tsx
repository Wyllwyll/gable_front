import { useState } from "react";
import ModalChoix from "./modal_choix";
import { BASE_URL } from "../../constant/url";
import { Tcomposants } from "./tipage/Tcomposants";
import { Tselection } from "./tipage/Tselection";





export default function ConfigurateurGauche() {

    const [modalTitle, setModalTitle] = useState<string>("");
    const [types, setTypes] = useState<Tcomposants[]>([]);
    const [selections, setSelections] = useState<Tcomposants[]>([])

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
                        <div className="color-yellow"> {selections[1] && selections[1].description}</div>
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
                        <div className="color-yellow"> {selections[2] && selections[2].description}</div>
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
                        <div className="color-yellow"> {selections[5] && selections[5].description}</div>
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
                        <div className="color-yellow"> {selections[10] && selections[10].description}</div>
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
                        <div className="color-yellow"> {selections[6] && selections[6].description}</div>
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
                        <div className="color-yellow"> {selections[4] && selections[4].description}</div>
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
                        <div className="color-yellow"> {selections[7] && selections[7].description}</div>
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
                        <div className="color-yellow"> {selections[8] && selections[8].description}</div>
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
                        <div className="color-yellow"> {selections[9] && selections[9].description}</div>
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
                        <div className="color-yellow"> {selections[11] && selections[11].description}</div>
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
                        <div className="color-yellow"> {selections[12] && selections[12].description}</div>
                    </h2>
                </div>
            </div>
            <ModalChoix modalTitle={modalTitle} types={types} setSelections={setSelections} selections={selections} />
        </>
    )
}


