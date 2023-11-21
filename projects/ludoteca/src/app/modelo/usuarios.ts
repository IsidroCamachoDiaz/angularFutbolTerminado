export interface Usuario{
    id?:string;
    nombre:string;
    saldo:number;
    estaBloqueado?:boolean;
    puntos:number;
    imagen?:string
}