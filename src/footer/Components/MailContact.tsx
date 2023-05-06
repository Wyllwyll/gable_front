import emailjs from '@emailjs/browser';
import { useRef } from 'react';


interface MailContactProps {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>;
    page: string;
}
export default function MailContact(props: MailContactProps) {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY").then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        } else {
            console.error("Le formulaire est introuvable");
        }
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};