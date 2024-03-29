import {
  useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetComedyMoviesQuery,
  useGetNetflixOriginalsQuery,
  useGetDocumentariesQuery,
  useGetTopRatedQuery
} from '../../api/moviesApi'
import {
  useGetActionSeriesQuery,
  useGetComedySeriesQuery,
  useGetDocumentariesSeriesQuery,
  useGetHorrorSeriesQuery,
  useGetNetflexOriginalsSeriesQuery,
  useGetRomanceSeriesQuery,
  useGetTopRatedSeriesQuery
} from '../../api/seriesApi';

import Row from '../RowComponent/Row';
const HomeContent = () => {

    // get Movies API 
    const { data: moviesNetflex = [] } = useGetNetflixOriginalsQuery();
    const { data: movieTopRated = [] } = useGetTopRatedQuery();
    const { data: moviesHorror = [] } = useGetHorrorMoviesQuery();
    const { data: moviesComedy = [] } = useGetComedyMoviesQuery();
    const { data: moviesRomance = [] } = useGetRomanceMoviesQuery();
    const { data: moviesDocumentarie = [] } = useGetDocumentariesQuery();
    const { data: moviesAction = [], isLoading } = useGetActionMoviesQuery();

    // get Series API
    const { data: seriesAction = [] } = useGetActionSeriesQuery();
    const { data: sereisComedy = [] } = useGetComedySeriesQuery();
    const { data: sereisDocumentarie = [] } = useGetDocumentariesSeriesQuery();
    const { data: sereisHorrorSeries = [] } = useGetHorrorSeriesQuery();
    const { data: seriesNetflex = [] } = useGetNetflexOriginalsSeriesQuery();
    const { data: seriesRomance = [] } = useGetRomanceSeriesQuery();
    const { data: seriesTopRated = [] } = useGetTopRatedSeriesQuery();
    return (

        <div>
            <Row isLoading={isLoading} title={'اکشن'} series={seriesAction.results} movies={moviesAction.results} />
            <Row isLoading={isLoading} title={'برگزیده'} series={seriesTopRated.results} movies={movieTopRated.results} />
            <Row isLoading={isLoading} title={' ترسناک'} series={sereisHorrorSeries.results} movies={moviesHorror.results} />
            <Row isLoading={isLoading} title={' کمدی'} series={sereisComedy.results} movies={moviesComedy.results} />
            <Row isLoading={isLoading} title={'  انیمیشن'} series={seriesNetflex.results} movies={moviesNetflex.results} />
            <Row isLoading={isLoading} title={'مستند'} series={sereisDocumentarie.results} movies={moviesDocumentarie.results} />
            <Row isLoading={isLoading} title={' رمان'} series={seriesRomance.results} movies={moviesRomance.results} />
        </div>
    )
}
export default HomeContent;