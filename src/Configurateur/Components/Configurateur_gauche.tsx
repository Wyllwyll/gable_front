import { useContext, useState } from "react";
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
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Processeur")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Processeur
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['2'] && selections["2"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['2'] && `${selections["2"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['2'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('2')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Mere")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Mere
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['1'] && selections["1"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['1'] && `${selections["1"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['1'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('1')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Ventirad")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Ventirad
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['5'] && selections["5"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['5'] && `${selections["5"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['5'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('5')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Memoire-Vive(RAM)")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Memoire-Vive(RAM)
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['4'] && selections["4"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['4'] && `${selections["4"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['4'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('4')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Graphique")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Graphique
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['6'] && selections["6"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['6'] && `${selections["6"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['6'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('6')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Boitier")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Boitier
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['7'] && selections["7"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['7'] && `${selections["7"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['7'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('7')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Alimentation")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Alimentation
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['8'] && selections["8"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['8'] && `${selections["8"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['8'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('8')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("SSD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            SSD
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['9'] && selections["9"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['9'] && `${selections["9"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['9'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('9')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("HDD")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            HDD
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['10'] && selections["10"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['10'] && `${selections["10"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['10'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('10')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Son")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Son
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['11'] && selections["11"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['11'] && `${selections["11"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['11'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('11')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" my-3 ">
                <div className="accordion-item">
                    <h2 className="accordion-header mx-0 " id="headingOne">
                        <button className="btn btn-link accordion-button fs-4 btn-hover"
                            type="button"
                            onClick={() => handleButtonClick("Carte-Reseau")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                        >
                            Carte-Reseau
                            <i className="bi bi-plus-square m-2 color5"></i>
                        </button>
                    </h2>
                    <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                        <div className="container-fluid">
                            <div className="row justify-content-beetwen align-items-center">
                                <div className="col">
                                    {selections['3'] && selections["3"].description}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['3'] && `${selections["3"].price} €`}
                                </div>
                                <div className="col-2 text-end">
                                    {selections['3'] && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleSelectionClear('3')}
                                        >
                                            <i className="bi bi-x-square"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalChoix modalTitle={modalTitle} types={types} />

        </>
    )
}

{/* map a tester pour iterer les categories    {[
                    {
                        id: '2',
                        label: 'Processeur',
                        identifier: 'Processeur'
                    },
                    {
                        id: '4',
                        label: 'Mémoire RAM',
                        identifier: 'Memoire-Vive(RAM)'
                    }
                ].map(categorie => {
                    return (
                    <div className="accordion-item">
                        <h2 className="accordion-header mx-0 " id="headingOne">
                            <button className="btn btn-link accordion-button fs-4 btn-hover"
                                type="button"
                                onClick={() => handleButtonClick(categorie.identifier)}
                                data-bs-toggle="modal"
                                data-bs-target="#choixModal"
                            >
                                {categorie.label}
                                <i className="bi bi-plus-square m-2 color5"></i>
                            </button>
                        </h2>
                        <div className="accordion-collapse bg-color5 rounded-2 fs-6 p-1">
                            <div className="container-fluid">
                                <div className="row justify-content-beetwen align-items-center">
                                    <div className="col">
                                        {selections[categorie.id] && (`${selections[categorie.id].description}`)}
                                    </div>
                                    <div className="col-2 text-end">
                                        {selections[categorie.id] && (`${selections[categorie.id].price} €`)}
                                    </div>
                                    <div className="col-2 text-end">
                                        {selections[categorie.id] && (
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleSelectionClear(categorie.id)}
                                            >
                                                <i className="bi bi-x-square"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })} */}
