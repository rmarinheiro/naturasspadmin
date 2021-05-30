import { Categoria } from "./Categoria";

export class Produto{
    public id: number;
    public nome: string;
    public detalhe:string;
    public link: string;
    public preco:number;
    public disponivel:number;
    public destaque:number;
    public categoria:Categoria;

    public constructor(){
        this.categoria = new Categoria();
        this.categoria.id = 0;
    }
}