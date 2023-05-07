import { useContext, useEffect, useState } from "react";
import ModalChoix from "./modal_choix";
import { BASE_URL } from "../../constant/url";
import { Tcomposants } from "../tipage/Tcomposants";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SelectionContext } from "../../context/SelectionContext";





export default function ConfigurateurGauche() {

    const [modalTitle, setModalTitle] = useState<string>(""); // Gestion de l'état local pour le titre du modal et les types de composants
    const [types, setTypes] = useState<Tcomposants[]>([]);

    // Utilisation du contexte de sélection
    const context = useContext(SelectionContext)
    if (!context) return null
    const { selections, setSelections } = context


    // Fonction pour supprimer un élément sélectionné
    const handleSelectionClear = (key: string) => {
        const newSelections = { ...selections }; // Crée une copie de l'objet 'selections' pour ne pas modifier directement l'état
        delete newSelections[key];  // Supprime la sélection correspondant à la clé (key) passée en argument grace a l'operateur "delete"
        setSelections(newSelections); // Met à jour l'état 'selections' avec l'objet modifié
    };


    //ouvre le modal de Selection de Composant en ajustant son titre et charge les donnees correspondante au titre
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
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Processeur")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Processeur
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-beetwen align-items-center">
                            {selections['2'] &&
                                `${selections["2"].description}  
                                ${selections["2"].price}`}

                            {selections['2'] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear('2')}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>

                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Mere")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Mere
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center">
                            {selections["1"] &&
                                `${selections["1"].description}  
                            ${selections["1"].price}`}

                            {selections["1"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("1")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Ventirad")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Ventirad
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2  fs-6 p-1 d-flex justify-content-between align-items-center">
                            {selections["5"]
                                && `${selections["5"].description}  
                         ${selections["5"].price}`}
                            {selections["5"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("5")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Memoire-Vive(RAM)")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Memoire Vive RAM
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center"> {
                            selections["4"] &&
                            `${selections["4"].description}  
                        ${selections["4"].price}`}
                            {selections["4"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("4")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Graphique")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte Graphique
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center"> {
                            selections["6"] &&
                            `${selections["6"].description}  
                        ${selections["6"].price}`}
                            {selections["6"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("6")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Boitier")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Boitier
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center"> {
                            selections["7"] &&
                            `${selections["7"].description}  
                         ${selections["7"].price}`}
                            {selections["7"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("7")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>

            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Alimentation")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Alimentation
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center">
                            {selections["8"] &&
                                `${selections["8"].description}  
                        ${selections["8"].price}`}
                            {selections["8"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("8")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>

            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("SSD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            SSD
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center">
                            {selections["9"] &&
                                `${selections["9"].description} 
                         ${selections["9"].price}`}
                            {selections["9"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("9")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("HDD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            HDD
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center">
                            {selections["10"] &&
                                `${selections["10"].description}  
                        ${selections["10"].price}`}
                            {selections["10"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("10")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>

            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0" id="headingOne">
                        <button className="accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Son")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Son
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 d-flex justify-content-between align-items-center ">
                            {selections["11"] &&
                                `${selections["11"].description}  
                        ${selections["11"].price}`}
                            {selections["11"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("11")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0  " id="headingOne">
                        <button className="accordion-button fs-4 btn-hover color2 "
                            type="button"
                            onClick={() => handleButtonClick("Carte-Reseau")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Reseau
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                        <div className="bg-color5 rounded-2 fs-6 p-1 mb-5 d-flex justify-content-between align-items-center">
                            {selections["3"] &&
                                `${selections["3"].description}  
                        ${selections["3"].price}`}
                            {selections["3"] && (
                                <a
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => handleSelectionClear("3")}
                                >
                                    <i className="bi bi-x-square"></i>
                                </a>
                            )}
                        </div>
                    </h2>
                </div>
            </div>
            <ModalChoix modalTitle={modalTitle} types={types} />


        </>
    )
}

