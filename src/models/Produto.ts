export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    especificacoes: string;
    urlFoto?: string;
    preco: number;
}