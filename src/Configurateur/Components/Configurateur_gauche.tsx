import { useContext, useEffect, useState } from "react";
import ModalChoix from "./modal_choix";
import { BASE_URL } from "../../constant/url";
import { Tcomposants } from "../tipage/Tcomposants";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SelectionContext } from "../../context/SelectionContext";



export default function ConfigurateurGauche() {

    const [modalTitle, setModalTitle] = useState<string>("");
    const [types, setTypes] = useState<Tcomposants[]>([]);
    const context = useContext(SelectionContext);

    useEffect(() => {
    }, [context]);

    const { selections, setSelections } = context || {};
    if (!context) {
        console.log(selections);
        return null;
    }


    const handleSelectionClear = (key: string) => {
        const newSelections = { ...selections };
        delete newSelections[key];
        setSelections(newSelections);
    };



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
                    <h2 className="accordion-header mx-0 color-txt-orange " id="headingOne">
                        <button className="accordion-button fs-4 "
                            type="button"
                            onClick={() => handleButtonClick("Processeur")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Processeur
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1">
                            {selections["Processeur"] && (
                                <>
                                    <div>{selections["Processeur"].description}</div>
                                    <div>{selections["Processeur"].price}</div>
                                    <a
                                        className="btn btn-sm btn-outline-danger ms-2"
                                        onClick={() => {
                                            handleSelectionClear("Processeur");
                                        }}
                                    >
                                        <i className="bi bi-x-square"></i>
                                    </a>
                                </>
                            )}
                            {!selections["Processeur"] && (
                                <span>Aucune sélection de processeur</span>
                            )}
                        </div>
                    </h2>

                </div>
            </div>
            <div className="mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Mere")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Mere
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1">
                            {selections["Carte-Mere"] && `${selections["Carte-Mere"].description}  ${selections["Carte-Mere"].price}`}

                            {selections["Carte-Mere"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Carte-Mere")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Ventirad")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Ventirad
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1 ">{selections["Ventirad"] && `${selections["Ventirad"].description}  ${selections["Ventirad"].price}`}
                            {selections["Ventirad"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Ventirad")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Memoire-Vive(RAM)")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Memoire Vive RAM
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2  color-txt-dark fs-6 p-1"> {selections["Memoire-Vive(RAM)"] && `${selections["Memoire-Vive(RAM)"].description}  ${selections["Memoire-Vive(RAM)"].price}`}
                            {selections["Memoire-Vive(RAM)"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Memoire-Vive(RAM)")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Graphique")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte Graphique
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["Carte-Graphique"] && `${selections["Carte-Graphique"].description}  ${selections["Carte-Graphique"].price}`}
                            {selections["Carte-Graphique"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Carte-Graphique")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Boitier")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Boitier
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["Boitier"] && `${selections["Boitier"].description}  ${selections["Boitier"].price}`}
                            {selections["Boitier"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Boitier")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Alimentation")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Alimentation
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["Alimentation"] && `${selections["Alimentation"].description}  ${selections["Alimentation"].price}`}
                            {selections["Alimentation"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Alimentation")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("SSD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            SSD
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["SSD"] && `${selections["SSD"].description}  ${selections["SSD"].price}`}
                            {selections["SSD"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("SSD")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("HDD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            HDD
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["HDD"] && `${selections["HDD"].description}  ${selections["HDD"].price}`}
                            {selections["HDD"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("HDD")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Son")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Son
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections["Carte-Son"] && `${selections["Carte-Son"].description}  ${selections["Carte-Son"].price}`}
                            {selections["Carte-Son"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Carte-Son")}
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
                    <h2 className="accordion-header mx-0 color-txt-orange" id="headingOne">
                        <button className="accordion-button fs-4"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Reseau")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Reseau
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1 mb-5"> {selections["Carte-Reseau"] && `${selections["Carte-Reseau"].description}  ${selections["Carte-Reseau"].price}`}
                            {selections["Carte-Reseau"] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => handleSelectionClear("Carte-Reseau")}
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

