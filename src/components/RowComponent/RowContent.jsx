import { Link } from 'react-router-dom';

import StringShrinker from '.././StringShrinker.JSX';
import { base_url } from '../../baseUrlImage';

import SkeletonLoading from '../SkeletonLoading';

const RowContent = ({moviesState,switched}) => {
    return (
        <div className='div-row-container' >
            <div className='div-row-movies'>
                {moviesState?.length >= 1 ? <>
                    {moviesState.map(movie => (
                        <div className='div-middle-contained'>
                            <img key={movie.id} src={`${base_url}${movie.poster_path}`} />
                            <div className='div-middle'>
                                <div className='div-text-middle'>
                                    <Link style={{ textDecoration: 'none' }} to={`/movies_detail/${movie.id}/?type=${switched}`}>
                                        <span class="material-symbols-rounded" style={{ color: 'orangered' }}>
                                            play_circle
                                        </span>
                                    </Link>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} >
                                        <p style={{ opacity: 1, fontSize: '.8rem', direction: 'ltr' }}>
                                            {switched ? <StringShrinker str={movie.name} n={10} /> : <StringShrinker str={movie.title} n={10} />}
                                        </p>
                                        <p style={{ fontSize: '.8rem' }} >
                                            {switched ? ` انتشار :${movie.first_air_date}` : ` انتشار :${movie.release_date}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </> :
                    <SkeletonLoading />
                }
            </div>
        </div>
    )
}
export default RowContent;