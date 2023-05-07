

export default function Footer(props: {
    setPage: React.Dispatch<
        React.SetStateAction<'Configurateur' | 'Profile' | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">
    >;
}) {



    return (
        <footer className="text-center text-white bg-color4 footer-shadow row " >

            <div className="col-4 ">
                <h6 className=" mt-2 color6">Contact</h6>
                <div className="d-flex justify-content-center">
                    <ul className="cursor liste-puce  list-unstyled color8 ">
                        <li onClick={() => {
                            props.setPage('MailContact');
                        }}>Un projet particulier? <br />
                        Une envie folle? <br />
                        Contactez-nous!</li>
                    </ul>
                </div>
            </div>

            <div className="col-4 ">
                <h6 className=" mt-2 color6">Informations</h6>
                <div className="d-flex justify-content-center">
                    <ul className=" liste-puce  list-unstyled color8">
                        <li>Conditions Generales</li>
                        <li>Informations legales</li>
                        <li>Donnees Personnelles</li>
                        <li>Gestion des Cookies</li>
                    </ul>
                </div>
            </div>

            <div className="col-4 ">
                <h6 className=" mt-2 color6">FAQ</h6>
                <div className="d-flex justify-content-center">
                    <ul className=" liste-puce list-unstyled color8">
                        <li>Rubrique d'aide</li>
                        <li>Informations</li>
                        <li>Guide d'achat</li>
                        <li>Tutoriels</li>
                    </ul>
                </div>
            </div>


        </footer>
    )
}