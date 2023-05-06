import { useContext } from "react";
import { Tcomposants } from "../tipage/Tcomposants";
import { SelectionContext } from "../../context/SelectionContext";


export default function ModalChoix(props: { modalTitle: string, types: Tcomposants[] }) {
    const context = useContext(SelectionContext)
    if (!context) return null
    const { selections, setSelections } = context


    //met à jour les sélections avec le composant cliqué
    function setSelectedComponent(clickedElement: Tcomposants) {
        const newSelections = {  //crée une nouvelle sélection en copiant l'objet selections existant
            ...selections,
            [clickedElement.types.id]: clickedElement, //ajoute ou modifie l'élément cliqué à l'objet de la sélection en utilisant l'ID du type de composant comme clé
        };
        setSelections(newSelections);  // Met à jour les sélections avec la nouvelle sélection créée

    }
    // Génère le tableau en mappant les types sur les lignes de tableau
    const tableau = (props.types.map((elm, key) =>
        //Chaque ligne du tableau a une fonction onClick pour définir le composant sélectionné et ferme le modal au click via data-bs-dismiss="modal"
        <tr className="cursor hover-color" key={key} data-bs-dismiss="modal" onClick={() => setSelectedComponent(elm)}>
            <td>{elm.description}</td>
            <td>{elm.price}</td>
        </tr >
    ))




    return (


        <div
            className="modal fade "
            aria-labelledby="choixModal"
            id="choixModal"
            tabIndex={-1}
        >
            <div className="modal-dialog  modal-dialog-centered">
                <div className=" modal-content color-lightgreen">
                    <div className="modal-header">
                        <h5 className="modal-title color-txt-white fs-4">{props.modalTitle}</h5>
                        <button
                            type="button"
                            className="btn-close color-orange"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="close"
                        ></button>
                    </div>

                    <div className="modal-body ">

                        <table className="table table-hover table-responsive  ">
                            <thead>
                                <tr className="color-green fs-5">
                                    <th scope="col">Désignation</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider color-yellow ">
                                {tableau}
                                {tableau}
                                {tableau}
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div>

    )
}