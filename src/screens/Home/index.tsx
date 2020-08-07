import React from 'react'
import { Paper, Grid, Box, Typography } from "@material-ui/core"
import GridHeader from '../../components/GridHeader'
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"

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


function Home() {

    const classes = useStyles()

    return (
        <>
            <GridHeader />
            
            <Grid container direction="column">

                <Grid item container>

                    <Grid item xs={1} />

                    <Grid item xs={10}>

                        <Paper elevation={8} className={classes.boxPrincipal}>
                            <Typography variant='h3' className={classes.titleBoxPrincipal}>
                                Bem-vindo ao Sistema de Estudo ReactJS
                        </Typography>

                            <Typography variant='h6' className={classes.titleGrids}>
                                Grid Dinâmicas do Material UI (se adapta ao tamanho da tela)
                        </Typography>

                            <Grid item container className={classes.gridContainer}>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.gridItem}>
                                    <Typography variant='h6' className={classes.textColunasGrid}>
                                        Coluna 1 da Grid
                                </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.gridItem}>
                                    <Typography variant='h6' className={classes.textColunasGrid}>
                                        Coluna 2 da Grid
                                </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.gridItem}>
                                    <Typography variant='h6' className={classes.textColunasGrid}>
                                        Coluna 3 da Grid
                                </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.gridItem}>
                                    <Typography variant='h6' className={classes.textColunasGrid}>
                                        Coluna 4 da Grid
                                </Typography>
                                </Grid>

                            </Grid>

                        </Paper>

                    </Grid>

                    <Grid item xs={1} />

                </Grid>

            </Grid>
        </>
    )
}

export default Home