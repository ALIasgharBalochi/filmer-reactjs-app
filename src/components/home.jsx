import React  from 'react';

import {useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetComedyMoviesQuery,
  useGetNetflixOriginalsQuery,
  useGetDocumentariesQuery,
  useGetTopRatedQuery
} from '../api/moviesApi'
import Banner from './Banner';
import Row from './Row';
import Loading from './Loading';

const Home = () => {

  const {data: moviesNetflex = []} = useGetNetflixOriginalsQuery();
  const {data: movieTopRated = []} = useGetTopRatedQuery();
  const {data: moviesHorror = []} = useGetHorrorMoviesQuery();
  const {data: moviesComedy = []} = useGetComedyMoviesQuery();
  const {data: moviesRomance = []} = useGetRomanceMoviesQuery();
  const {data: moviesDocumentarie = []} = useGetDocumentariesQuery();
  const {data: moviesAction = [],isLoading} = useGetActionMoviesQuery();

   

  return (
    <>
      {isLoading?        
       <Loading Height={'100vh'} text={'Loading'}/>
      :
      (
       <div style={{marginTop: '2.9rem'}}>
         <Banner/>
         <div className='div-baner'>
          <div>
           <Row isLoading={isLoading} title={'اکشن'} movies={moviesAction.results}/>
           <Row isLoading={isLoading} title={'برگزیده'} movies={movieTopRated.results}/>
           <Row isLoading={isLoading} title={' ترسناک'} movies={moviesHorror.results}/>
           <Row isLoading={isLoading} title={' کمدی'} movies={moviesComedy.results}/>
           <Row isLoading={isLoading} title={'  انیمیشن'} movies={moviesNetflex.results} />
           <Row isLoading={isLoading} title={'مستند'} movies={moviesDocumentarie.results}/>
           <Row isLoading={isLoading} title={' رمان'} movies={moviesRomance.results}/> 
          </div>
        </div>
       </div>
      )
      }
    </>
  )
}

export default Home;