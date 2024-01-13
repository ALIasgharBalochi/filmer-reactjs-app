import React, { useState, useEffect, useContext } from 'react';

import { useGetMoveDetailQuery } from '../api/moviesApi';
import { useGetSeriesDetailQuery } from '../api/seriesApi';

import { useParams, useSearchParams } from 'react-router-dom';

import { moviesContext } from '../context/moviesContext';
import Loading from './Loading';
import BreadCrumbs from './Breadcrumbs';

import MoviesDetai from './Details/MoviesDetai';
import SeriesDetail from './Details/seriesDetail';
import SuggestedComponent from './SuggestedComponent/SuggestedComponent';

const SinglePageMovies = () => {

  const { movieID } = useParams();
  const [searchParams] = useSearchParams();

  const [movieNameTriler, setMovieNameTriler] = useState('')

  const { setOpenBackdrop, setNameFromTrailer, } = useContext(moviesContext);

  const { data: movie = [], isLoading: loadingMovie } = useGetMoveDetailQuery(movieID);
  const { data: series = [], isLoading: loadingSeries } = useGetSeriesDetailQuery(movieID)

  const checkType = searchParams.get('type') == 'false';

  useEffect(() => {
    const m = searchParams.get('type') == 'false'
    if (m) {
      setMovieNameTriler(movie?.title)
    } else {
      setMovieNameTriler(series?.original_name)
    }
  }, [loadingMovie, loadingSeries])

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
        <SuggestedComponent loadingMovie={loadingMovie} loadingSeries={loadingSeries} movie={movie} series={series} />
      </div>
    </>
  )
}
export default SinglePageMovies;
