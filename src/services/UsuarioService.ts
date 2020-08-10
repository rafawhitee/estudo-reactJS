import React from 'react'
import Produto from "../models/Produto"
import Usuario from "../models/Usuario"

const adicionarProdutoNoCarrinho = (usuario: Usuario, produto: Produto): Usuario => {
    if (usuario) {
        let cloneUsuarioLogado: Usuario = { ...usuario }

        // Verifica se está nulo, se estiver, inicializa um novo Array<Produto>
        if (!cloneUsuarioLogado.carrinho)
            cloneUsuarioLogado.carrinho = new Array<Produto>()

        cloneUsuarioLogado.carrinho.push(produto)
        return cloneUsuarioLogado
    }
    return usuario
}

const removerProdutoDoCarrinho = (usuario: Usuario, produto: Produto): Usuario => {
    if (usuario) {
        let cloneUsuarioLogado: Usuario = { ...usuario }
        if (cloneUsuarioLogado.carrinho) {
            let novoCarrinho = cloneUsuarioLogado.carrinho.filter(p => p.id !== produto.id)
            cloneUsuarioLogado.carrinho = novoCarrinho
            return cloneUsuarioLogado
        }
    }
    return usuario
}

const removerTodosProdutosDoCarrinho = (usuario: Usuario): Usuario => {
    if (usuario) {
        let cloneUsuarioLogado: Usuario = { ...usuario }
        let carrinhoVazio = new Array<Produto>()
        cloneUsuarioLogado.carrinho = carrinhoVazio
        return cloneUsuarioLogado
    }
    return usuario
}

export { adicionarProdutoNoCarrinho, removerProdutoDoCarrinho, removerTodosProdutosDoCarrinho }