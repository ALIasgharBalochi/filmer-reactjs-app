import React, {useContext,useEffect,useState} from 'react'


import { Link,useNavigate } from 'react-router-dom';

import { moviesContext } from '../context/moviesContext';
import StringShrinker from './StringShrinker.JSX';
import { base_url } from '../baseUrlImage';

const Row = ({title, movies,isLoading}) => {
  const [moviesState,setMoivesState] = useState([])

  const {setMovieSinglePage} = useContext(moviesContext);
  
  
  const navigate = useNavigate();

  useEffect(() => {
     if (isLoading) {
      console.log('please whate ');
     }else{ 
      setMoivesState(movies)
     }
  },[isLoading,movies])

  return (
    <>
    <div className='div-text-p'>
     <p>{title}</p>
    </div>
    <div className='div-row-container' >
       <div onClick={() => navigate('/movies_detail/${movie.id}/')} className='div-row-movies'>
       {moviesState?.length >= 1? <>
        {moviesState.map(movie => (
          <div className='div-middle-contained'
          onClick={() => {setMovieSinglePage(movie)}}
          >
           <img key={movie.id} src={`${base_url}${movie.poster_path}`} />
            <div className='div-middle'>
              <div className='div-text-middle'>
              <Link style={{textDecoration: 'none'}}  to={`/movies_detail/${movie.id}/`}>
              <span class="material-symbols-rounded" style={{color: 'orangered'}}>
                play_circle
              </span>
             </Link>
             <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',cursor: 'pointer'}} >
             <p style={{opacity: 1,fontSize: '.8rem',direction: 'ltr'}}><StringShrinker  str={movie.title} n={10} /></p>
             <p style={{fontSize: '.8rem'}} >{` انتشار :${movie.release_date}`}</p>
             </div>
              </div>
            </div>
          </div>
         ))}
       </>: null }
         </div>
    </div>
    </>
  )
}

export default Row;











