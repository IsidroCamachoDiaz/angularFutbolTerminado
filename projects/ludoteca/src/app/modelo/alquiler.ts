import { Juego } from "./juegos";
import { Usuario } from "./usuarios";

export interface Alquiler{
    id?:string;
    usuarioAlquiler:Usuario;
    juegoAlquiler:Juego;
    fechaEntrega:string;
}