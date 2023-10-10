import { useState,useEffect } from "react";
import { useContext } from "react";

import { Box,Typography,Drawer,
    TextField,Card,CardContent,
    CardMedia
 } from "@mui/material";
import {ArrowUpward
} from '@mui/icons-material';

import { useNavigate } from "react-router-dom";


import { moviesContext } from "../../context/moviesContext";
import {useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetComedyMoviesQuery,
  useGetNetflixOriginalsQuery,
  useGetDocumentariesQuery,
  useGetTopRatedQuery
} from '../../api/moviesApi';
import StringShrinker from '../StringShrinker.JSX';
import { base_url } from "../../baseUrlImage";


const DrawerSearch = () => { 
    const {openDrawerSearch,setOpenDrawerSearch,setMovieSinglePage} = useContext(moviesContext);

    console.log(setOpenDrawerSearch);

    const [allMovies,setAllMovies] = useState([]);
    const [query , setQuery] = useState({text:""});
    const [filteredProducts,setFilteredProducts] = useState([]);
    
    const navigate = useNavigate();

    const {data: moviesNetflex = []} = useGetNetflixOriginalsQuery();
    const {data: movieTopRated = []} = useGetTopRatedQuery();
    const {data: moviesHorror = []} = useGetHorrorMoviesQuery();
    const {data: moviesComedy = []} = useGetComedyMoviesQuery();
    const {data: moviesRomance = []} = useGetRomanceMoviesQuery();
    const {data: moviesDocumentarie = [],} = useGetDocumentariesQuery();
    const {data: moviesAction = [],isLoading,isSuccess} = useGetActionMoviesQuery();


    useEffect(() => {
      return () => {
        setQuery({text: ''})
      }
    },[])

    useEffect(() => {

      if (isLoading ) {
        console.log('please whate ');
      }else if (isSuccess) {

        const movies = [];

        moviesAction.results.map((movie) => {
          return movies.unshift(movie)
         })
           
         if (moviesComedy.results ) {
          moviesComedy.results.map((movie) => {
            return movies.unshift(movie)
           })
         }
         
         if (moviesNetflex.results ) {
          moviesNetflex.results.map((movie) => {
            return movies.unshift(movie)
           })
         }
   
          
         if (movieTopRated.results ) {
          movieTopRated.results.map((movie) => {
           return movies.unshift(movie)
          })
         } 

         if (moviesHorror.results ) {
          moviesHorror.results.map((movie) => {
           return movies.unshift(movie)
          })
        }
          
        if (moviesRomance.results ) {
          moviesRomance.results.map((movie) => {
           return movies.unshift(movie)
          })
        }

        if (moviesDocumentarie.results ) {
          moviesDocumentarie.results.map((movie) => {
           return movies.unshift(movie)
          })
        }
          
      setAllMovies(movies)
      }
      else {
        console.log('😭');
      }
    },[isLoading])

   
    const handleSearch = (event) => {
      setQuery({...query,text: event.target.value});
      setTimeout(() => {
         const allProducts = allMovies.filter((product) => {
            return product.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
       })
       setFilteredProducts(allProducts) ;
      },3000)
       
    }
   
    
    return(
     <Drawer
     open={openDrawerSearch}
     onClose={() => setOpenDrawerSearch(false)}
     variant="temporary"
     anchor="top"
     sx={{
        "@ .MuiDrawer-paper": {
            width: "100%",
            height: '100vh',
            zIndex: 1
        },
        zIndex: 1
     }}
     >
        <Box className='boxing' sx={{
        height: 'auto',
        fontFamily: 'vazir',
        direction: 'ltr' ,
        padding: '5rem 1rem',
        backgroundColor: '#343232'
        }}>
         <Box sx={{display: 'flex',flexDirection: 'row'}}>
          <Box
         sx={{cursor: 'pointer',color: 'orangered'}}
         onClick={() => setOpenDrawerSearch(!openDrawerSearch)}
         >
         <ArrowUpward/>
         </Box>
         <TextField
          label="جست و جو" 
          variant="standard"
          value={query.text}
          onChange={handleSearch}
          id="standard-basic"
          sx={{width: '100%'}}
            color="warning"
           />
         </Box>
         <Box sx={{color: 'whitesmoke',backgroundColor: '#343232',width: '100%',height: 'auto',minHeight: '68vh'}}>
          {query.text.length === 0? <Box sx={{margin: '.5rem 2rem ',color: 'orangered'}}>نام فیلم مورد نظر خود را به انگلیسی وارد کنید وارد کنید😊</Box>:
            <Box sx={{display: 'flex',flexDirection: 'column'}}>
            {isLoading? null: (<>
              {filteredProducts?.length > 1? <>
               {filteredProducts.map((movie) => (
                <Card
                 onClick={() => {setMovieSinglePage(movie),
                  setOpenDrawerSearch(false),
                  navigate('/movies_detail/${movie.id}/')
                  }}
                 sx={{cursor:' pointer', direction: 'rtl',display: 'flex',justifyContent: 'flex-end',backgroundColor: '#343232',':hover': {backgroundColor: '#272727'},margin: '.5rem 2rem' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto',color: 'whitesmoke',display: 'flex',flexDirection: 'column',alignItems: 'flex-end',justifyContent: 'flex-start' }}>
                    <Typography variant="body1"><StringShrinker str={movie.title} n={30}/></Typography>
                    <Typography sx={{display: 'flex',alignItems:' center'}} variant='body2'>{`تاریخ انتشار :${movie.release_date}`}<i style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>date_range</i></Typography>
                    <Typography sx={{display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block'
                    },marginTop: '.5rem'}} variant="body1"><StringShrinker str={movie.overview} n={100}/></Typography>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    image={`${base_url}${movie.poster_path}`}
                    alt="movie image"
                  />
                </Card>
             ))}
              </> : <p>فیلم یافت نشد</p>}
            </>)}
            </Box>
          }
         </Box> 
         
        </Box>
     </Drawer>
    )
}

export default DrawerSearch;