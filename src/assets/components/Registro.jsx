import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { useState } from "react";
import CustomAlert from "./Alert";

const Registro = () => {
  const Facebook = <BsFacebook />;
  const Github = <BsGithub />;
  const Linkedin = <AiFillLinkedin />;

  const [myAlert, setMyAlert] = useState({
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
      <Formulario setMyAlert={setMyAlert} />
      
      {myAlert.msg && <CustomAlert info={myAlert} />}
  

     </main>
  );
};

export default Registro;
