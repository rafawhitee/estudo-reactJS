import React from 'react'
import { Grid } from "@material-ui/core"
import GridHeader from '../../components/GridHeader'
import ProdutoContainer from '../../components/ProdutoContainer'
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { getProdutos } from '../../mocks/Produtos.mock'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        boxPrincipal: {
            backgroundColor: theme.palette.secondary.main,
            padding: 12,
        },

        titleBoxPrincipal: {
            color: 'white',
            fontWeight: 'bold',
        },

        titleGrids: {
            marginTop: 15,
            color: 'white',
            fontWeight: 'bold',
        },

        gridContainer: {
            border: `1px solid white`,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 40,
            padding: 8,
            marginTop: 10
        },

        gridItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        textColunasGrid: {
            color: 'white',
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


                <Grid item container>

                    <Grid item xs={1} />

                    <Grid item xs={10}>
                        {produtos.map(produto => (
                            <ProdutoContainer {...produto} />
                        ))}
                    </Grid>

                    <Grid item xs={1} />

                </Grid>

            </Grid>
        </>
    )
}

export default Produtos