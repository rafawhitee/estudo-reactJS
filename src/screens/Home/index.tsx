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

        gridContainer: {
            backgroundColor: 'green',
            marginTop: 10
        },

        gridItem: {
            justifyContent: 'center',
            alignItems: 'center'
        },

        textColunasGrid: {
            fontColor: 'white',
        }
    }),
)


function Home() {

    const classes = useStyles()

    return (
        <Grid container direction="column">
            <GridHeader />

            <Grid item container>

                <Grid item xs={1} />

                <Grid item xs={10}>

                    <Paper elevation={3} className={classes.boxPrincipal}>
                        <Typography variant='h3' className={classes.titleBoxPrincipal}>
                            Bem-vindo ao Sistema de Estudo ReactJS
                        </Typography>


                        <Grid item container className={classes.gridContainer}>

                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant='h6' className={classes.textColunasGrid}>
                                    Coluna 1 da Grid
                                </Typography>
                            </Grid>

                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant='h6' className={classes.textColunasGrid}>
                                    Coluna 2 da Grid
                                </Typography>
                            </Grid>

                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant='h6' className={classes.textColunasGrid}>
                                    Coluna 3 da Grid
                                </Typography>
                            </Grid>

                            <Grid item xs={4} className={classes.gridItem}>
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
    )
}

export default Home