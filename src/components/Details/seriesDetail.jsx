import { Box, Typography, } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


import logo from '../../../public/vite.svg';
import StringShrinker from '.././StringShrinker.JSX';
import { base_url } from '../../baseUrlImage';

const SeriesDetail = ({movieSinglePage,setNameFromTrailer,setOpenBackdrop,movieNameTriler}) => {
    return (
        <div className='div-middle-contained2'>
            <img src={`${base_url}${movieSinglePage?.backdrop_path}`} className='img-backdrop' />
            <div className='div-middle2'>
                <div className='div-in-middle'>
                    <Grid2 container >
                        <Grid2 xs={12} sm={12} md={4} lg={4} xl={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <img src={`${base_url}${movieSinglePage?.poster_path}`} className='img-in-Grid' style={{ opacity: 1, margin: '1rem' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Box
                                    onClick={() => { setNameFromTrailer(movieNameTriler), setOpenBackdrop(true) }}
                                    sx={{
                                        width: '3rem',
                                        height: '3rem',
                                        border: '1px solid orangered',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img src={logo} style={{ width: '90%', height: '90%', borderRadius: '50%', opacity: 1 }} />
                                </Box>
                                <Typography variant='body1'>تیزر / بازیگران</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} sm={12} md={8} lg={8} xl={8} sx={{ direction: 'rtl', padding: '0 1rem' }}>


                            <h4 className='h4-single'>
                                {`سینمایی ${movieSinglePage?.original_name}`}
                            </h4>
                            <h5 className='h5-single'><i style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>closed_caption</i>{`زبان :${movieSinglePage?.original_language}`}</h5>
                            <h5 className='h5-single'>
                                <i style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>date_range</i>
                                {`تاریخ انتشار ${movieSinglePage?.first_air_date}`}
                            </h5>
                            <h5 className='h5-single'><i style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>folder_open</i>ژانر ها : {movieSinglePage.genres?.map((g, index) => (
                                <p key={index}>{g.name},</p>
                            ))}</h5>
                            <h5 className='h5-single'>{movieSinglePage?.vote_average >= 7 ? <i style={{ color: 'green' }}>
                                <span style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>
                                    trending_up
                                </span>{`10/ ${movieSinglePage?.vote_average}`}</i> : <i style={{ color: 'yellow' }}>
                                <span style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>
                                    trending_down
                                </span>{`10/ ${movieSinglePage?.vote_average}`}</i>}</h5>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p style={{ direction: 'ltr' }} className='p-singlePage-movie-discriptins'><StringShrinker str={movieSinglePage?.overview} n={200} /></p>
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
            </div>
        </div>
    )
}
export default SeriesDetail;