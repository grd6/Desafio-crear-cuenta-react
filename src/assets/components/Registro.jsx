import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { useState } from "react";
import Alert from "./Alert";

const Registro = () => {
  const Facebook = <BsFacebook />;
  const Github = <BsGithub />;
  const Linkedin = <AiFillLinkedin />;
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color:""
  });
  return (
    <main>
      <h1>Crea una cuenta</h1>
      <div className="SocialButton">
        <SocialButton icon={Facebook} />
        <SocialButton icon={Github} />
        <SocialButton icon={Linkedin} />
      </div>
      <h6>o usa tu email para registrarte </h6>
      <Formulario setAlert={setAlert} />
      {console.log("registro", alert.msg)}
      {alert.msg && <Alert color={alert.color} msg={alert.msg} />}
     </main>
  );
};

export default Registro;
