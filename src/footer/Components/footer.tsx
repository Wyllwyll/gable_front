

export default function Footer(props: {
    setPage: React.Dispatch<
        React.SetStateAction<'Configurateur' | 'Profile' | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" |"MailContact">
    >;
}){



    return (
        <footer className="text-center text-white color-lightgreen footer-shadow row " >

            <div className="col-4 ">
                <h6 className="color-txt-yellow mt-2">Une Question?</h6>
                <a className="color-txt-orange cursor btn-hover  " onClick={() => {
                    props.setPage('MailContact');
                }}>Un projet particulier? une envie folle? Contactez-nous!</a>
            </div>

            <div className="col-4 ">
                <h6 className="color-txt-yellow mt-2">Informations</h6>
                <ul className="color-txt-orange liste-puce ">
                    <li className="color-txt-orange ">-Conditions Generales</li>
                    <li className="color-txt-orange ">-Informations legales</li>
                    <li className="color-txt-orange ">-Donnees Personnelles</li>
                    <li className="color-txt-orange ">-Gestion des Cookies</li>
                </ul>
            </div>

            <div className="col-4 ">
                <h6 className="color-txt-yellow mt-2">FAQ</h6>
                <ul className="color-txt-orange liste-puce">
                    <li className="color-txt-orange ">-Rubrique d'aide</li>
                    <li className="color-txt-orange ">-Informations</li>
                    <li className="color-txt-orange ">-Guide d'achat</li>
                    <li className="color-txt-orange ">-Tutoriels</li>
                </ul>
            </div>


        </footer>
    )
}