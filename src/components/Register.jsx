import { useDispatch } from "react-redux";
import { registerUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {

  const { register , handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrar = async(formData) => {
    dispatch(registerUser(formData,navigate ))
  }


  return (
    <div className="Register">
    <h1 className="titleReg">Register</h1>
      <form  onSubmit={handleSubmit(registrar)}>
    <label className="reg1">
        Nombre de usuario
        <input type="text" {...register("name")} required/>
    </label>

    <label className="reg2">
        email
        <input type="email" {...register("email")} required/>
    </label>

    <label className="reg3">
        password
        <input type="password"  {...register("password")} required/>
    </label>


    
        <button type="submit" className="btn btn-primary btn-block btn-large" value="registrate">
          Welcome
        </button>
    </form>
    </div>
  )
}

export default Register;
