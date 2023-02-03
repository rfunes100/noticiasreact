import axios from "axios"
import { useState, useEffect, createContext } from "react"



const NoticiasContext = createContext()

const NoticiasProvider = ({children }) => {

    const [categoria , setcategoria ] = useState('general')
    const [noticias , setnoticias ] = useState([])
    const [pagina , setpagina ] = useState(1)
    const [tototalnoticia , settototalnoticia] = useState(0)




    useEffect(() => {
      const consultarapi = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        const {data } = await axios(url)
        setnoticias(data.articles)
        settototalnoticia(data.totalResults)
        setpagina(1)

        
/*
        fetch( `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
            setnoticias(data.articles)
        //    settototalnoticia(data.totalResults)
            setpagina(1)
        })*/

      }
      consultarapi()
    
      return () => {
        const consultarapi = async () => {

            
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data } = await axios(url)
            console.log('data',data)     
            setnoticias(data.articles)
            settototalnoticia(data.totalResults)
            setpagina(1)


            /*
            fetch(  `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}` )
            .then((response) => {
              return response.json()
            })
            .then((data) => {
                setnoticias(data.articles)
           //     settototalnoticia(data.totalResults)
                setpagina(1)
            })*/
    
          }
          consultarapi()
      }
    }, [categoria ])
    


    useEffect(() => {
        const consultarapi = async () => {
       
            /*
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

          const {data } = await axios(url)
          setnoticias(data.articles)
          settototalnoticia(data.totalResults)
          */


          fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setnoticias(data.articles)
      //  settototalnoticia(data.totalResults)
      })

       
  
        }
        consultarapi()
      
        return () => {
          const consultarapi = async () => {

            /*
             const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
              const {data } = await axios(url)
              console.log('data',data)  
              setnoticias(data.articles)
              settototalnoticia(data.totalResults)
*/

              

              fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`)
              .then((response) => {
                return response.json()
              })
              .then((data) => {
                setnoticias(data.articles)
               // settototalnoticia(data.totalResults)
              })
      
            }
            consultarapi()
        }
      }, [ pagina ])
    
      


    const handlechangecategoria = e => {
        setcategoria(e.target.value)
    }

    const handlechangepagina = (e, valor ) => {
        setpagina(valor)

    }

    return(
        <NoticiasContext.Provider
        value={{
            categoria,
            handlechangecategoria,
            noticias,
            tototalnoticia,
            handlechangepagina,
            pagina

        }}
        
        >
            {children}
        </NoticiasContext.Provider>

    )



}


export {
    NoticiasProvider
}

export default NoticiasContext
