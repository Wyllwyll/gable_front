import { useContext } from "react";
import { Tcomposants } from "../tipage/Tcomposants";
import { SelectionContext } from "../../context/SelectionContext";





export default function ModalChoix(props: { modalTitle: string, types: Tcomposants[] }) {
    const context = useContext(SelectionContext)
    if (!context) return null
    const { selections, setSelections } = context


    function setSelectedComponent(clickedElement: Tcomposants) {
        console.log("logElementSelection",clickedElement);
        const newSelections = {
            ...selections,
            [clickedElement.types.id]: clickedElement,
        };
        console.log(newSelections);
        
        setSelections(newSelections);
        
    }

    const tableau = (props.types.map((elm, key) =>
        <tr className="cursor" key={key} data-bs-dismiss="modal" onClick={() => setSelectedComponent(elm)}>
            <td>{elm.description}</td>
            <td>{elm.price}</td>
        </tr >
    ))




    return (

        <>
            <div
                className="modal fade modalTable"
                aria-labelledby="choixModal"
                id="choixModal"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered  ">
                    <div className=" modal-content modal-content-login ">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.modalTitle}</h5>
                            <button
                                type="button"
                                className="btn-close color-orange"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="close"
                            ></button>
                        </div>

                        <div className="modal-body modalTable">

                            <table className="table table-hover table-responsive ">
                                <thead>
                                    <tr>
                                        <th scope="col">Désignation</th>
                                        <th scope="col">Prix</th>

                                    </tr>
                                </thead>
                                <tbody className="table-group-divider ">
                                    {tableau}
                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}