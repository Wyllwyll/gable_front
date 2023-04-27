export default function Profile(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile">>
}) {







    return (
        <div className="rounded opacity2 hauteurOrder stickyAff ">

            <h2 className="text-white ms-2">Profile </h2>
            <button
                type="button"
                className="btn-close green-close"
                id="close"
                onClick={() => {
                    props.setPage('Configurateur');

                }}>
            </button>









        </div>



    )
}