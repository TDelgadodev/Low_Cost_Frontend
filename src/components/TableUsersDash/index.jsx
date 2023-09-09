import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";

export const TableUserDash = () => {
  const { metricsUsers } = useAdmin();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (metricsUsers && metricsUsers.data) {
      setUsers(metricsUsers.data);
      setLoading(false);
    }
  }, [metricsUsers]);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Dirección</th>
              <th scope="col">Numero de calle</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8">Cargando...</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address ? user.address.street : "N/A"}</td>
                  <td>{user.address ? user.address.numberAddress : "N/A"}</td>
                  <td>{user.rol ? user.rol.name : "N/A"}</td>
                  <td>
                    {/* Agrega aquí botones de acciones */}
                    {/* Ejemplo: */}
                    {/* <button onClick={() => handleEdit(user.id)}>Editar</button> */}
                    {/* <button onClick={() => handleDelete(user.id)}>Eliminar</button> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
