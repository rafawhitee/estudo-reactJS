import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DehazeIcon from '@material-ui/icons/Dehaze'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Produto from '../../models/Produto'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    produtoPrecoText: {
      fontWeight: 'bold',
      color: theme.palette.primary.main
    },

    iconsContainer: {
      color: theme.palette.secondary.main
    },

  }),
);

export default function ProdutoCard(props: any) {

  // Props
  const { produto, adicionarNoCarrinho } = props

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={3} xl={2}>

      <Card>

        <CardHeader
          title={produto.nome}
          subheader={produto.descricao}
        />

        <CardMedia
          className={classes.media}
          image={produto.urlFoto}
          title="Foto Produto"
        />

        <CardContent>
          <Typography variant="h5" className={classes.produtoPrecoText}>
            R$ {produto.preco}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>

          <IconButton aria-label="adicionar ao carrinho" className={classes.iconsContainer}
            onClick={adicionarNoCarrinho}>
            <AddShoppingCartIcon fontSize='large' />
          </IconButton>

          <IconButton aria-label="mais informações" className={classes.iconsContainer} >
            <DehazeIcon fontSize='large' />
          </IconButton>

        </CardActions>

      </Card>
    </Grid>
  );
}