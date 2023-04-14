

type ModalChoixProps = {
    title: string;
};
export default function ModalChoix(props: ModalChoixProps) {







    return (

        <>
            <div
                className="modal fade"
                aria-labelledby="choixModal"
                id="choixModal"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered  ">
                    <div className=" modal-content modal-content-login ">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button
                                type="button"
                                className="btn-close green-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="close"
                            ></button>
                        </div>

                        <div className="modal-body">

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Samso</td>
                                        <td>Natto</td>
                                        <td>@samso</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Tinor</td>
                                        <td>Horton</td>
                                        <td>@tinor_har</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mythor</td>
                                        <td>Bully</td>
                                        <td>@myth_tobo</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}