import React, { useState,useEffect,useContext } from 'react';

import {Box,Typography,} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import {useGetComedyMoviesQuery} from '../api/moviesApi';

import { moviesContext } from '../context/moviesContext';
import logo from '../../public/vite.svg';
import Row from './Row';
import StringShrinker from './StringShrinker.JSX';
import Loading from './Loading';
import { base_url } from '../baseUrlImage';
import BreadCrumbs from './Breadcrumbs';

const SinglePageMovies = () => {

  const [moviesSuggested,setMovieSuggested] = useState([])
  const {setOpenBackdrop,setNameFromTrailer,movieSinglePage} = useContext(moviesContext);
  console.log(movieSinglePage.adult);
  const {data: moviesComedy = [],isLoading} = useGetComedyMoviesQuery();
  
  
  useEffect(() => {
     if (isLoading) {
      console.log('isLoading');
     }else{
      const movies = moviesComedy.results.filter((movie) => {
        return movie.id != movieSinglePage.id;
      })
      setMovieSuggested(movies)
      document.documentElement.scrollTop = 0;
     }

  },[movieSinglePage])


  return (
    <>
    {isLoading?
      <Loading/>
     : 
     <div>
      <div style={{direction: 'rtl' ,margin: '1rem 0',borderBottom: '1px solid gray',marginTop: '3rem' }}>
       <BreadCrumbs/>
      </div>
      <div className='div-middle-contained2'>
         <img src={`${base_url}${movieSinglePage.backdrop_path}`} className='img-backdrop'  />
            <div className='div-middle2'>
              <div className='div-in-middle'>
                 <Grid2 container >
                  <Grid2 xs={12} sm={12} md={4} lg={4} xl={4} sx={{display: 'flex',flexDirection: 'column',justifyContent:'center', alignItems: 'center'}} >
                     <img src={`${base_url}${movieSinglePage.poster_path}`} className='img-in-Grid' style={{opacity: 1,margin: '1rem'}}/>
                     <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                      <Box 
                      onClick={() => {setNameFromTrailer(movieSinglePage.title),setOpenBackdrop(true)}}
                      sx={{width: '3rem',
                      height: '3rem',
                      border: '1px solid orangered',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'}}
                      >
                        <img src={logo} style={{width: '90%', height: '90%', borderRadius: '50%',opacity:1}} />
                      </Box>
                      <Typography variant='body1'>تیزر / بازیگران</Typography>
                     </Box>
                  </Grid2>
                  <Grid2 xs={12} sm={12} md={8} lg={8} xl={8} sx={{direction: 'rtl',padding: '0 1rem'}}>
            
                    
                    <h4 className='h4-single'>
                    {movieSinglePage.title?`سینمایی ${movieSinglePage.title}`:`سینمایی ${movieSinglePage.name}` }
                    </h4>
                     <h5 className='h5-single'><i style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>closed_caption</i>{`زبان :${movieSinglePage.original_language}`}</h5>
                     <h5 className='h5-single'>
                    <i style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>date_range</i>
                    {movieSinglePage.title?`تاریخ انتشار :${movieSinglePage.release_date}`:`تاریخ انتشار ${movieSinglePage.first_air_date}` }
                    </h5>
                     <h5 className='h5-single'><i style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>folder_open</i>{`ژانر ها :${movieSinglePage.genre_ids}`}</h5>
                     <h5 className='h5-single'>{movieSinglePage.vote_average >= 7? <i style={{color: 'green'}}>
                     <span style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>
                      trending_up
                      </span>{`10/ ${movieSinglePage.vote_average}`}</i> : <i style={{color: 'yellow'}}>
                      <span style={{color: 'orangered',marginLeft: '.2rem'}} className='material-symbols-rounded'>
                       trending_down
                      </span>{`10/ ${movieSinglePage.vote_average}`}</i>}</h5>
                      <div style={{display: 'flex',justifyContent: 'flex-start'}}>
                      <p style={{direction: 'ltr'}} className='p-singlePage-movie-discriptins'><StringShrinker str={movieSinglePage.overview} n={200}/></p>
                      </div>
                  </Grid2>
                </Grid2> 
              </div>
            </div>
          </div>
      <div>
      <Row isLoading={isLoading} title={'پیشنهادی'} movies={moviesSuggested}/>
      </div>
    </div> }
    
    </>

  )
}

export default SinglePageMovies;
