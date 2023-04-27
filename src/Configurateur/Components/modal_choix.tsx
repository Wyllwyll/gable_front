import { useContext } from "react";
import { Tcomposants } from "../tipage/Tcomposants";
import { selectionsContext } from "../../context/SelectionContext";




export default function ModalChoix(props: { modalTitle: string, types: Tcomposants[]}) {
    const {selections, setSelections} = useContext (selectionsContext)
    function setSelectedComponent(clickedElement: Tcomposants) {
        const newSelection = [...selections];
        newSelection[clickedElement.types.id] = clickedElement;
        setSelections([...newSelection])
    } 


    const tableau = (props.types.map((elm, key) =>
        <tr key={key}  data-bs-dismiss="modal" onClick={() =>setSelectedComponent(elm)}>
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