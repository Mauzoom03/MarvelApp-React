import axios from "axios";

const token = localStorage.getItem("token")
console.log(token)
//vamos a definir los datos del HEADER de la peticion a la API
const APIHeader = {
    //tipo de aplicacion
    'Accept': 'application/json',
    //contenido de la aplicacion
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    //la autorizacion, el beare es el token
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem("token")}`;
        }
    },
};


export const API = axios.create({
    headers: APIHeader,
    timeout: 30000,
    baseURL:"http://localhost:5001/",
});