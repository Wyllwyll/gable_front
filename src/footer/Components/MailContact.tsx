import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';


interface MailContactProps {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>;
    page: string;
}
export default function MailContact(props: MailContactProps) {
    const form = useRef<HTMLFormElement>(null);
    const notifySuccess = (msg: string) =>
        toast.success(msg, {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });
    const notifyError = (msg: string) =>
        toast.error(msg, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current && form.current.checkValidity()) {
            emailjs.sendForm("contact_service", "contact_form", form.current, "TwiVwrtpKRiDwSEuW").then(
                (result) => {
                    notifySuccess("Message envoyé avec succès ! Nous vous repondrons au plus vite!");
                },
                (error) => {
                    notifyError("Erreur lors de l'envoi du message");
                }
            );
        } else {
            notifyError("Veuillez remplir tous les champs")
        }
    };

    return (
        <div className="row ">
            <div className="col-md">
                <div className="card hauteurOrder">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="">Formulaire de contact : </h2>
                            <button
                                type="button"
                                className="btn-close"
                                id="close"
                                onClick={() => {
                                    props.setPage('Configurateur');
                                }}>
                            </button>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <label className="form-label">Votre nom: </label>
                            <input className="form-control mb-3"
                                type="text"
                                name="user_name" required />

                            <label className="form-label">Votre Email: </label>
                            <input className="form-control mb-3"
                                placeholder="name@example.com"
                                type="email"
                                name="user_email" required />

                            <label className="form-label">Message: </label>
                            <textarea className="form-control mb-5 max-area"
                                placeholder="Decrivez votre projet au maximun (utilisation, budget, taille etc..)"
                                name="message" required />

                            <div className="d-flex justify-content-center">
                                <button className="btn btn-hover fs-5 "
                                    type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};