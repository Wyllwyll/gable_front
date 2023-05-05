import { useContext, useEffect, useState } from "react";
import ModalChoix from "./modal_choix";
import { BASE_URL } from "../../constant/url";
import { Tcomposants } from "../tipage/Tcomposants";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { selectionsContext } from "../../context/SelectionContext";





export default function ConfigurateurGauche() {

    const [modalTitle, setModalTitle] = useState<string>("");
    const [types, setTypes] = useState<Tcomposants[]>([]);
    const { selections, setSelections } = useContext(selectionsContext)
    const [showClearButton, setShowClearButton] = useState(false);


    useEffect(() => {
        setShowClearButton(Boolean(selections[1]));
    }, [selections]);



    /* const handleDelete = (id: number) => {
        setComposants((prevState: any) => {
            const updatedComposants = [...prevState];
            const index = updatedComposants.findIndex(comp => comp.id === id);
            updatedComposants.splice(index, 1);
            return updatedComposants;
        });
    }; */




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
                            {selections[2] && `${selections[2].description}  ${selections[2].price}`}

                            {showClearButton && selections[2] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => setSelections([...selections.slice(2, 1)])}
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
                            onClick={() => handleButtonClick("Carte-Mere")}
                            data-bs-toggle="modal"
                            data-bs-target="#choixModal"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Carte-Mere
                            <i className="bi bi-plus-square m-2"></i>
                        </button>
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1">{selections[1] && `${selections[1].description}  ${selections[1].price}`}

                            {showClearButton && selections[1] && (
                                <a
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => setSelections([...selections.slice(1, 1)])}
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1 ">{selections[5] && `${selections[5].description}  ${selections[5].price}`}</div>
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
                        <div className="color-yellow rounded-2  color-txt-dark fs-6 p-1"> {selections[4] && `${selections[4].description}  ${selections[4].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[6] && `${selections[6].description}  ${selections[6].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[7] && `${selections[7].description}  ${selections[7].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[8] && `${selections[8].description}  ${selections[8].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[9] && `${selections[9].description}  ${selections[9].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[10] && `${selections[10].description}  ${selections[10].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1"> {selections[11] && `${selections[11].description}  ${selections[11].price}`}</div>
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
                        <div className="color-yellow rounded-2 color-txt-dark fs-6 p-1 mb-5"> {selections[3] && `${selections[3].description}  ${selections[3].price}`}</div>
                    </h2>
                </div>
            </div>
            <ModalChoix modalTitle={modalTitle} types={types} />


        </>
    )
}

