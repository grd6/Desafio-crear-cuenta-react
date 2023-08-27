import React from "react";
import { useState } from "react";

const Formulario = ({ setMyAlert }) => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const validar = (e) => {
    e.preventDefault();
    const { name, email, password, cPassword } = datos;
    const noData = !name || !email || !password || !cPassword
    const wrongPass = password !== cPassword
    //const validarinpt = !name || !email || !password || !cPassword;
    
    noData ? setMyAlert({
        error: true,
        msg: "Debe de llenar todos los campos!",
        color:"alert alert-danger mt-3"
      }) :
      setMyAlert({
        error: false,
        msg: "Cuenta creada!",
        color:"alert alert-success mt-3"
      })
 
    wrongPass == true ? setMyAlert({
      error: true,
      msg: "Password no son iguales",
      color: "alert alert-danger mt-3"
    }) : null;

    setDatos({
      name: "",
      email: "",
      password: "",
      cPassword: "",
    });
  };

  const handleChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  return (
    <form className="f-form" onSubmit={validar}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          onChange={handleChange}
          value={datos.name}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          onChange={handleChange}
          value={datos.email}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          onChange={handleChange}
          value={datos.password}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          name="cPassword"
          className="form-control"
          placeholder="confirma password"
          onChange={handleChange}
          value={datos.cPassword}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success" size="lg">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Formulario;
