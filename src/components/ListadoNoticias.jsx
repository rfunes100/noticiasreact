import { Grid, Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticia"
import Noticia from "./Noticia"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ListadoNoticias = () => {

    const {noticias , tototalnoticia, handlechangepagina , pagina } = useNoticias()
    

    console.log('noticias',tototalnoticia)

    const totalpaginas = Math.ceil( tototalnoticia / 20 )


  return (
    <>
    <Typography
    textAlign={'center'}
    marginY={5}
    variant='h3'
    component={'h2'}

    
    >
        ultimas noticias 
    </Typography>

    <Grid container
    spacing={2}
    >
        {noticias.map(noticia => (
            <Noticia 
            key={noticia.url}
            noticia={noticia}
            ></Noticia>

        ))}
    </Grid>


    <Stack
    sx = {{
        marginY: 5
    }}
     spacing={2}
    direction={'row'}
    justifyContent='center'
    alignItems={'center'}
    >
      <Pagination count={totalpaginas}
       color="primary" 
       onChange={handlechangepagina}
       page={pagina}
       />
     
    </Stack>

    </>

  )
}

export default ListadoNoticias