import Produto from '../models/Produto'

export function getProdutos(): Produto[] {
    return [

        {
            id: 1, nome: 'Playstation 4', descricao: 'Console da Sony', especificacoes: '500GB', urlFoto:
                'https://i.zst.com.br/images/console-xbox-one-s-1-tb-microsoft-hdr-4k-photo196016494-12-2d-15.jpg', preco: 2199
        },

        {
            id: 2, nome: 'Playstation 4', descricao: 'Console da Sony', especificacoes: '1TB', urlFoto:
                'https://i.zst.com.br/images/console-xbox-one-s-1-tb-microsoft-hdr-4k-photo196016494-12-2d-15.jpg', preco: 2499
        },

        {
            id: 3, nome: 'Playstation 4 Pro', descricao: 'Console da Sony', especificacoes: '1TB', urlFoto:
                'https://http2.mlstatic.com/console-ps4-pro-4k-1-tb-novo-original-sony-7215-D_NQ_NP_852066-MLB31072431446_062019-F.jpg', preco: 3299
        },

    ]
} 