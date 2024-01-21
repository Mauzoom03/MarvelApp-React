
import { API } from "../../AxiosApi/api"

export const registerUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "register_user" });
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        const result = await API.post("user/register", formData);
        console.log(result)
        //consulta result
        dispatch({ type: "register_user_ok", payload: result.data });
        navigate("/login");
    } catch (error) {
        dispatch({ type: "register_user_ko", payload: error.message });
        alert("Error al Registrarse , revise si sus datos son correctos")
    }

};
export const loginUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "login_user" });
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        const result = await API.post("user/login", formData);
        console.log(result)
        //consulta result
        dispatch({ type: "login_user_ok", payload: result.data });
        localStorage.setItem("user",result.data.getUser._Id)
        localStorage.setItem("token",result.data.token)
        //Se guarda el token que te da el back, y los datos del usuario loguedao
        navigate("/main")
    } catch (error) {
        dispatch({ type: "login_user_ko", payload: error.message });
        alert("Error al iniciar sesion , porfavor revise si los campos son correctos")
    }

};

export const actualUser = (formData) => async (dispatch) => {
    dispatch({ type: "actual_user_ok"});
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        const result = await API.post("user/checksession", formData);
        console.log(result)
        console.log(result.data.email)
        localStorage.getItem("email")

    } catch (error) {
        dispatch({ type: "actual_user_ko", payload: error.message });
        alert(error)
    }

};

export const logoutUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "log_out"});
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        localStorage.removeItem("token")
        navigate("/")

    } catch (error) {
        dispatch({ type: "log_out_ko", payload: error.message });
        console.log(error)
    }

};
