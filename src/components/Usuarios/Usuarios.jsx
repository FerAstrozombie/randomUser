import { useState, useEffect } from "react";
import { getUsers } from "../../services/user.js";
import Loader from "../Loader/Loader.jsx";

const Usuarios = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsersFinales = async () => {
        try {
            const tempDoc = await getUsers();
            return tempDoc
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true)
        getUsersFinales().then((res) => {
            setUsers(res)
            setLoading(false)
        }).catch((error) => console.log(error))
    }, []);

    return (
        <>
            {loading ?
                <Loader />
                :
                users ?
                    <div className="usuariosAcomodados">
                        <table>
                            <thead>
                                <tr>
                                    <td>Nombre</td>
                                    <td>Apellido</td>
                                    <td>Edad</td>
                                    <td>Sexo</td>
                                    <td>Email</td>
                                    <td>Telefono</td>
                                    <td>Pais</td>
                                    <td>Ciudad</td>
                                    <td>Avatar</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.nombre}</td>
                                                <td>{user.apellido}</td>
                                                <td>{user.edad}</td>
                                                <td>{user.sexo}</td>
                                                <td>{user.email}</td>
                                                <td>{user.telefono}</td>
                                                <td>{user.pais}</td>
                                                <td>{user.ciudad}</td>
                                                <td>
                                                    <img src={user.avatar} alt={user.nombre} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div >
                    :
                    <h2>No hay usuarios generados</h2>
            }
        </>
    )
}

export default Usuarios