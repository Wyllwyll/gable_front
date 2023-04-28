import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function LoginForm() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { setUser, user } = useContext(UserContext);

    const notifySuccess = (msg: string) =>
        toast.success(msg, {
            position: 'bottom-right',
            autoClose: 1500,
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


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (emailRef.current?.value && passwordRef.current?.value) {
            const body = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };


            fetch(`${BASE_URL}/auth/login`, options)
                .then((response) => response.json())
                .then((data) => {


                    if (data.data) {
                        emailRef.current!.value = '';
                        passwordRef.current!.value = '';

                        //setToken(data.data.a)
                        setUser(data.data);
                        setTimeout(() => {
                            document.getElementById('close')?.click();
                        }, 1500);
                        notifySuccess(data.message);
                    } else {
                        notifyError(data.message[0]);
                        data.message.forEach((element: string) => {
                            notifyError(element)
                        });
                    }

                });
        } else {
            notifyError('Informations manquantes');
        }
    };


    return (
        <>
            <div
                className="modal fade"
                aria-labelledby="loginModal"
                id="loginModal"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered  ">
                    <div className=" modal-content modal-content-login ">
                        <div className="modal-header">
                            <h5 className="modal-title">Identifiants de Connexion</h5>
                            <button
                                type="button"
                                className="btn-close green-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="close"
                            ></button>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="modal-body login-color">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <p>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Email"
                                    ></input>
                                </p>

                                <label
                                    htmlFor="inputPassword"
                                    className="form-label"
                                >
                                    Password
                                </label>

                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="password"
                                ></input>
                            </div>

                            <div className="modal-footer d-flex justify-content-center">
                                {user.access_lvl < 1 ? (
                                    <>
                                        <button
                                            type="submit"
                                            className="btn btn-green"
                                        >
                                            {' '}
                                            Connexion
                                        </button>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </>
    );
}