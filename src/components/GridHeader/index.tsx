import React from 'react'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Header from '../Header'

const useStyles = makeStyles(() => ({
    gridHeader: {
        marginBottom: 15
    },
}))

function GridHeader() {
    const classes = useStyles()
    return (
        <Grid item className={classes.gridHeader}>
            <Header />
        </Grid>
    )
}

export default GridHeader