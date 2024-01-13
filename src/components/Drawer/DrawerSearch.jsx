import { useState,} from "react";
import { useContext } from "react";

import {
  Box, Typography, Drawer,
  TextField, Card, CardContent,
  CardMedia
} from "@mui/material";
import {
  ArrowUpward
} from '@mui/icons-material';

import {  Link } from "react-router-dom";


import { moviesContext } from "../../context/moviesContext";
import { useSearchMoviesQuery } from '../../api/moviesApi';
import StringShrinker from '../StringShrinker.JSX';
import { base_url } from "../../baseUrlImage";


const DrawerSearch = () => {
  const { openDrawerSearch, setOpenDrawerSearch } = useContext(moviesContext);

  const [query, setQuery] = useState({ text: "" });

  const { data: movies = [], isLoading } = useSearchMoviesQuery(query.text);

  const handleSearch = (event) => {
    setQuery({ ...query, text: event.target.value });

  }

  return (
    <Drawer
      open={openDrawerSearch}
      onClose={() => setOpenDrawerSearch(false)}
      variant="temporary"
      anchor="top"
      sx={{
        "@ .MuiDrawer-paper": {
          width: "100%",
          height: '100vh',
          zIndex: 1
        },
        zIndex: 1
      }}
    >
      <Box className='boxing' sx={{
        height: 'auto',
        fontFamily: 'vazir',
        direction: 'ltr',
        padding: '5rem 1rem',
        backgroundColor: '#343232'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            sx={{ cursor: 'pointer', color: 'orangered' }}
            onClick={() => setOpenDrawerSearch(!openDrawerSearch)}
          >
            <ArrowUpward />
          </Box>
          <TextField
            label="جست و جو"
            variant="standard"
            value={query.text}
            onChange={handleSearch}
            id="standard-basic"
            sx={{ width: '100%' }}
            color="warning"
          />
        </Box>
        <Box sx={{ color: 'whitesmoke', backgroundColor: '#343232', width: '100%', height: 'auto', minHeight: '68vh' }}>
          {query.text.length === 0 ? <Box sx={{ margin: '.5rem 2rem ', color: 'orangered' }}>نام فیلم مورد نظر خود را به انگلیسی وارد کنید😊</Box> :
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {isLoading ? null : (<>
                {movies.results?.length > 1 ? <>
                  {movies.results.map((movie) => (
                    <Link style={{ textDecoration: 'none' }} to={`/movies_detail/${movie.id}/?type=false`}>
                      <Card
                        onClick={() => {
                            setOpenDrawerSearch(false)
                        }}
                        sx={{ cursor: ' pointer', direction: 'rtl', display: 'flex', justifyContent: 'flex-end', backgroundColor: '#343232', ':hover': { backgroundColor: '#272727' }, margin: '.5rem 2rem' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto', color: 'whitesmoke', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                            <Typography variant="body1"><StringShrinker str={movie.title} n={30} /></Typography>
                            <Typography sx={{ display: 'flex', alignItems: ' center' }} variant='body2'>{`تاریخ انتشار :${movie.release_date}`}<i style={{ color: 'orangered', marginLeft: '.2rem' }} className='material-symbols-rounded'>date_range</i></Typography>
                            <Typography sx={{
                              display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'block'
                              }, marginTop: '.5rem'
                            }} variant="body1"><StringShrinker str={movie.overview} n={100} /></Typography>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          image={`${base_url}${movie.poster_path}`}
                          alt="movie image"
                        />
                      </Card>
                    </Link>
                  ))}
                </> : <p>فیلم یافت نشد</p>}
              </>)}
            </Box>
          }
        </Box>

      </Box>
    </Drawer>
  )
}

export default DrawerSearch;