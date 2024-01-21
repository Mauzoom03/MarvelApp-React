import { actualUser } from "../redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ActualUser = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  const lookUser = async (formData) => {
    try {
      // Llama a la acción actualUser y almacena el resultado en el estado local
      const userResult = await dispatch(actualUser(formData, navigate));
      
      // Actualiza el estado local con los datos del usuario
      setUserData(userResult);

      //Controlamos errores//
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <button
        className="actualUserBtn"
        onClick={handleSubmit(lookUser)}
      >
        Ver Usuario Logado
      </button>
      {userData && (
        <div>
          <h1 className="showEmail">Email: {userData.email}</h1>
        </div>
      )}
    </div>
  );
};

export default ActualUser;

