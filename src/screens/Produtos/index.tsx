import React from 'react'
import { Grid } from "@material-ui/core"
import GridHeader from '../../components/GridHeader'

function Produtos() {
    return (
        <Grid container direction="column">
            <GridHeader />

            <Grid item container>
                <Grid item xs={12}>
                    <h1> Produtos </h1>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Produtos