import { useRef} from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constant/url";

export function RegisterForm() {

    // Créer des références pour les champs email, mot de passe et vérification du mot de passe
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passVerifRef = useRef<HTMLInputElement>(null);

    const notifySuccess = (msg: string,) => toast.success(msg,
        {
            position: "bottom-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    const notifyError = (msg: string,) => toast.error(msg,
        {
            position: "bottom-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        // Empêcher le rechargement de la page lors de la soumission du formulaire
        event.preventDefault();
        if (
            // Vérifier si les champs email, mot de passe et vérification du mot de passe ont des valeurs et si les mots de passe correspondent
            emailRef.current?.value &&
            passwordRef.current?.value &&
            passVerifRef.current?.value &&
            passwordRef.current?.value === passVerifRef.current?.value
        ) {
            const body = JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                passwordVerify: passVerifRef.current.value
            });

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            };


            fetch(`${BASE_URL}/users/register`, options)
                .then(response => response.json())
                .then(data => {
                    if (data.data) {
                        // Mettre à jour le message et réinitialiser les inputs
                        emailRef.current!.value = "";
                        passwordRef.current!.value = "";
                        passVerifRef.current!.value = "";
                        setTimeout(() => {
                            // Passer au formulaire de connexion après un timer
                            document.getElementById("loginButton")?.click();
                        }, 1500);
                        notifySuccess(data.message)


                    }
                    else {
                        if (typeof data.message === 'string') {
                            notifyError(data.message);
                        } else {
                            notifyError(data.message[0]);
                            data.message.forEach((element: string) => {
                                notifyError(element)
                            });
                        }
                    }
                });

        }
        else {
            notifyError('informations manquantes')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="modal fade"
                id="registerModal"
                tabIndex={-1} >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content bg-color4 ">
                        <div className="modal-header">
                            <h5 className="modal-title">S'enregister</h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="modal">
                            </button>
                        </div>

                        <div className="modal-body bg-color4">
                            <p>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input ref={emailRef} type="email" className="form-control" id="inputEmailRegister" placeholder="@Email"></input>
                            </p>

                            <p>
                                <label htmlFor="inputPassword" className="form-label">mot de Passe</label>
                                <input ref={passwordRef} type="password" className="form-control" id="inputPasswordRegister" placeholder="Password"></input>
                            </p>

                            <p>
                                <label htmlFor="inputPassword" className="form-label">Verifiez votre Mot de Passe</label>
                                <input ref={passVerifRef} type="password" className="form-control" id="inputPasswordVerify" placeholder="Verify your password"></input>
                            </p>
                        </div>

                        <div className="modal-footer justify-content-center ">
                            <button type="submit"
                                className="btn  fs-5 btn-hover"
                            >
                                Valider
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}