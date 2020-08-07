import Produto from '../models/Produto'

export default function getProdutos(): Produto[] {
    return [
        { id: 1, nome: 'Playstation 4', descricao: 'Console da Sony', preco: 2199 },
        { id: 2, nome: 'Playstation 4 Pro', descricao: 'Console da Sony - Suporte a 4K', preco: 2999 },
        { id: 3, nome: 'Playstation 5', descricao: 'Console da Sony - Geração Atual', preco: 4799 },
        { id: 4, nome: 'Xbox One S', descricao: 'Console da Microsoft - Branco', preco: 1799 },
        { id: 5, nome: 'Xbox One X', descricao: 'Console da Microsoft - Suporte a 4K', preco: 2799 },
    ]
} 