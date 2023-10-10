import {useEffect,useState,useContext} from 'react'

import { useGetRomanceMoviesQuery } from '../api/moviesApi';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { moviesContext } from '../context/moviesContext';
import StringShrinker from './StringShrinker.JSX';
import {base_url} from '../baseUrlImage'

const Banner = () => {
    
    const [movieBanner,setMovieBanner] = useState([]);

     const {setMovieSinglePage} = useContext(moviesContext);


     const {data: movies,isLoading} = useGetRomanceMoviesQuery();
  
    const navigate = useNavigate();

    useEffect(() => {
      if (isLoading) {
        console.log('please whaited');
      }else{
        setMovieBanner(movies.results[
          Math.floor(Math.random() * movies.results.length)
         ]);
      }


    },[isLoading])

   return (
    <div
    className='Banner'
    style={{
        backgroundImage:  `url(${base_url}${movieBanner?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
        ,width: '100%',
        height: '100%',
        overflowX: 'hidden'
    }}
    >
     <div className='div-banner-content'>
       <h4 className='banner-title'>{movieBanner?.title}</h4>
       <div className='movie-control'>
        <Button
        onClick={() => {setMovieSinglePage(movieBanner),navigate(`/movies_detail/${movieBanner.id}/`)}}
         sx={{color: 'whitesmoke',':hover': {backgroundColor: '#343232',color: 'orangered'},backgroundColor: '#343232'}} variant='text'>مشاهده</Button>
        <Button sx={{color: 'whitesmoke',borderColor: '#343232',':hover': {borderColor: 'orangered'},margin: '0 0 0 .3rem'}} variant='outlined'>اضافه به لیست</Button>
       
       </div>
       <p className='p-discription'><StringShrinker str={movieBanner.overview} n={150}/></p>
     </div>
     <div className='feade__div'/>
    </div>
  )
}

export default Banner;
