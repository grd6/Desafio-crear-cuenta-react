const Alert = ({ Alert, color }) => {
  
  console.log(Alert.msg)
  return <>
    <span className={color}> {msg} </span>

  </>;
};

export default Alert;
