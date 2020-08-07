import React from 'react'
import { Grid } from "@material-ui/core"
import GridHeader from '../../components/GridHeader'
import ProdutoContainer from '../../components/ProdutoContainer'
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { getProdutos } from '../../mocks/Produtos.mock'

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

    return (
        <>
            <GridHeader />

            <Grid container direction="column">
                <Grid item container className={classes.gridProdutos} spacing={2}>
                    {produtos.map(produto => (
                        <ProdutoContainer {...produto} />
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default Produtos