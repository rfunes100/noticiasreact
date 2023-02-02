
import { Container , Grid , Typography } from '@mui/material';
import Formulario from './components/Formulario';
import {NoticiasProvider} from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias';




function App() {

  return (

    <NoticiasProvider>

  <Container>
    <header>
      <Typography allign='center'  marginY={5}
       component="h1" variant='h3'
      >
        BUscador de noticias

      </Typography>

    </header>

<Grid 
container="row"
justifyContent="center"
alignItems="center"

>
  <Grid item xs={12} md={6}>
    <Formulario></Formulario>

  </Grid>

</Grid>

<ListadoNoticias>

</ListadoNoticias>


  </Container>
    </NoticiasProvider>

  )
}

export default App
