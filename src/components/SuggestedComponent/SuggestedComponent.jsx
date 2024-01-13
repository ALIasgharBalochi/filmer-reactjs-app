import { useEffect, useState } from "react";

import { useGetComedyMoviesQuery } from "../../api/moviesApi";
import { useGetComedySeriesQuery } from "../../api/seriesApi";

import Row from "../RowComponent/Row";
const SuggestedComponent = ({ loadingMovie, series, movie, loadingSeries }) => {

    const [moviesSuggested, setMovieSuggested] = useState([])
    const [seriesSuggested, setSeriesSuggested] = useState([])

    const { data: moviesComedy = [], isLoading: loadingMovieSuggestede } = useGetComedyMoviesQuery();
    const { data: seriesComedy = [], isLoading: loadingSeriesSuggested } = useGetComedySeriesQuery()

    useEffect(() => {
        if (loadingMovieSuggestede) {
            console.log('isLoading');
        } else {
            const seriess = seriesComedy.results?.filter((serie) => {
                return serie?.id != series?.id;
            })
            const movies = moviesComedy.results?.filter((movies) => {
                return movies?.id != movie?.id;
            })
            setMovieSuggested(movies)
            setSeriesSuggested(seriess)
            document.documentElement.scrollTop = 0;
        }

    }, [loadingMovie, loadingSeries, loadingMovieSuggestede, loadingSeriesSuggested])
    return (
        <div>
            <Row isLoading={loadingMovieSuggestede} title={'پیشنهادی'} movies={moviesSuggested} series={seriesSuggested} />
        </div>
    )
}
export default SuggestedComponent;