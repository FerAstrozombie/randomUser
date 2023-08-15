import { useState } from "react"
import { getUser, saveUser } from "../../services/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const handleClick = async () => {
        await getUser().then((res) => {
            setUser(res.data.results);
            createUser(res.data.results);
        }).catch((error) => console.log(error))
    }

    const createUser = async (user) => {

        const userAdd = {
            nombre: user[0].name.first,
            apellido: user[0].name.last,
            edad: user[0].dob.age,
            sexo: user[0].gender,
            avatar: user[0].picture.large,
            pais: user[0].location.country,
            ciudad: user[0].location.city,
            telefono: user[0].phone,
            email: user[0].email,
        }
        await saveUser(userAdd).then(() => {
            toast.success('👦 usuario agregado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch((error) => console.log(error))
    }
    return (

        <>
            {
                user.length === 0 ?
                    <div>
                        <h2>Bienvenido al generador de usuarios</h2>
                        <h3>No has generado ningun usuario</h3>
                        <div className="usuarios">
                            <button onClick={handleClick}>Generar usuario</button>
                            <button onClick={() => navigate("/usuarios")}>
                                Usuarios generados
                            </button>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                    :
                    <div>
                        {
                            user.map((user, index) => (
                                <div key={index}>
                                    <h2>Bienvenido al generador de usuarios</h2>
                                    <img className="avatar" src={user.picture.large} alt="avatar" />
                                    <p>{user.name.first + " " + user.name.last}</p>
                                    <div className="usuarios">
                                        <button onClick={handleClick}>Generar usuario</button>
                                        <button onClick={() => navigate("/usuarios")}>
                                            Usuarios generados
                                        </button>
                                    </div>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick={false}
                                        rtl
                                        pauseOnFocusLoss={false}
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
                                </div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default User