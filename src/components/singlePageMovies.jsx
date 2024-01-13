import React, { useState, useEffect, useContext } from 'react';

import { useGetComedyMoviesQuery, useGetMoveDetailQuery } from '../api/moviesApi';
import { useGetComedySeriesQuery, useGetSeriesDetailQuery } from '../api/seriesApi';

import { useParams, useSearchParams } from 'react-router-dom';

import { moviesContext } from '../context/moviesContext';
import Row from './Row';
import Loading from './Loading';
import BreadCrumbs from './Breadcrumbs';

import MoviesDetai from './Details/MoviesDetai';
import SeriesDetail from './Details/seriesDetail';
const SinglePageMovies = () => {

  const { movieID } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [movieSinglePage, setMovieSinglePage] = useState([])
  const [moviesSuggested, setMovieSuggested] = useState([])
  const [seriesSuggested, setSeriesSuggested] = useState([])
  const [movieNameTriler, setMovieNameTriler] = useState('')

  const { setOpenBackdrop, setNameFromTrailer, } = useContext(moviesContext);

  const { data: moviesComedy = [], isLoading: loadingMovieSuggestede } = useGetComedyMoviesQuery();
  const { data: seriesComedy = [], isLoading: loadingSeriesSuggested } = useGetComedySeriesQuery()

  const { data: movie = [], isLoading: loadingMovie } = useGetMoveDetailQuery(movieID);
  const { data: series = [], isLoading: loadingSeries } = useGetSeriesDetailQuery(movieID)

  // const customLoadig = movieSinglePage?.length == 0;
  const checkType = searchParams.get('type') == 'false';

  // useEffect(() => {
  //   const m = searchParams.get('type') == 'false'

  //   if (m) {
  //     setMovieSinglePage(movie)
  //     setMovieNameTriler(movie?.title)
  //   } else {
  //     setMovieSinglePage(series)
  //     setMovieNameTriler(series?.original_name)
  //   }
  // }, [loadingMovie,loadingSeries])

  useEffect(() => {
    if (loadingMovieSuggestede) {
      console.log('isLoading');
    } else {
      const series = seriesComedy.results?.filter((series) => {
        return series?.id != movieSinglePage?.id;
      })
      const movies = moviesComedy.results?.filter((movie) => {
        return movie?.id != movieSinglePage?.id;
      })
      setMovieSuggested(movies)
      setSeriesSuggested(series)
      document.documentElement.scrollTop = 0;
    }

  }, [movieSinglePage, loadingMovieSuggestede, loadingSeriesSuggested])

  return (
    <>
      <div>
        <div style={{ direction: 'rtl', margin: '1rem 0', borderBottom: '1px solid gray', marginTop: '3rem' }}>
          <BreadCrumbs />
        </div>
        {checkType ?
          loadingMovie ?
            <Loading Height={'100vh'} text={'Loading'} />
            :
            <MoviesDetai movieSinglePage={movie} setNameFromTrailer={setNameFromTrailer} movieNameTriler={movieNameTriler} setOpenBackdrop={setOpenBackdrop} />

          :
          loadingSeries ?
            <Loading Height={'100vh'} text={'Loading'} />
            :
            <SeriesDetail movieSinglePage={series} setNameFromTrailer={setNameFromTrailer} movieNameTriler={movieNameTriler} setOpenBackdrop={setOpenBackdrop} />             
        }
        <div>
          {/* <Row isLoading={loadingMovieSuggestede} title={'پیشنهادی'} movies={moviesSuggested} series={seriesSuggested} /> */}
        </div>
      </div>

    </>

  )
}

export default SinglePageMovies;
