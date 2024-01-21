import { useDispatch } from "react-redux";
import { loginUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loguear = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loguear)}>
        <label className="label1">
          Email
          <input type="email" {...register("email")} required />
        </label>

        <label className="label2">
          Password
          <input type="password" {...register("password")} required />
        </label>

        <button type="submit" className="btn btn-primary btn-block btn-large"  >
          Let me in.
        </button>
      </form>
    </div>
  );
}

export default Login;
