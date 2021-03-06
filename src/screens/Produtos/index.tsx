import React from 'react'
import { Grid } from "@material-ui/core"
import GridHeader from '../../components/GridHeader'
import ProdutoCard from '../../components/ProdutoCard'
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { getProdutos } from '../../mocks/Produtos.mock'
import Produto from '../../models/Produto'
import { useAuth } from '../../contexts/Auth'
import Usuario from '../../models/Usuario'
import AuthContextValue from '../../models/AuthContextValue'
import * as UsuarioService from '../../services/UsuarioService'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridProdutos: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }),
)


function Produtos() {
    const classes = useStyles()
    const produtos = getProdutos()

    const { usuarioLogado, setUsuarioLogado }: AuthContextValue = useAuth()

    const adicionarNoCarrinho = (produto: Produto) => {
        if (usuarioLogado) {
            let usuarioModificado: Usuario = UsuarioService.adicionarProdutoNoCarrinho(usuarioLogado, produto)
            setUsuarioLogado(usuarioModificado)
        }
    }

    return (
        <>
            <GridHeader />

            <Grid container direction="column">
                <Grid item container className={classes.gridProdutos} spacing={2}>
                    {produtos.map(produto => (
                        <ProdutoCard key={produto.id} produto={produto} adicionarNoCarrinho={() => adicionarNoCarrinho(produto)} />
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default Produtos