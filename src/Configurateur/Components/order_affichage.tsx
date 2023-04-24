import { useContext } from "react";
import { selectionsContext } from "../../context/SelectionContext";

export default function OrderAffichage() {
    const { selections } = useContext(selectionsContext)
    return (
        <div className="container-fluid rounded color-green opacity-90">
            <div className=""> {selections[1] && `${selections[1].description}  ${selections[1].price}`}
            </div>

            <div className=""> {selections[2] && `${selections[2].description}  ${selections[2].price}`}
            </div>


            <div className=""> {selections[5] && `${selections[5].description}  ${selections[5].price}`}
            </div>


            <div className=""> {selections[10] && `${selections[10].description}  ${selections[10].price}`}
            </div>


            <div className=""> {selections[6] && `${selections[6].description}  ${selections[6].price}`}
            </div>

            <div className=""> {selections[4] && `${selections[4].description}  ${selections[4].price}`}
            </div>


            <div className=""> {selections[7] && `${selections[7].description}  ${selections[7].price}`}
            </div>


            <div className=""> {selections[8] && `${selections[8].description}  ${selections[8].price}`}
            </div>


            <div className=""> {selections[9] && `${selections[9].description}  ${selections[9].price}`}
            </div>



            <div className=""> {selections[11] && `${selections[11].description}  ${selections[11].price}`}
            </div>


            <div className=""> {selections[12] && `${selections[12].description}  ${selections[12].price}`}
            </div>
        </div>
    )

}