import { useContext, useState,useEffect } from 'react'


import {Backdrop, Box,Stack,Avatar} from '@mui/material'
import { deepOrange } from '@mui/material/colors';


import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import { moviesContext } from '../context/moviesContext';
import Loading from './Loading';


const BackDrop = () => {

    const [trailerUrl , setTrailerUrl] = useState('');
    
    const {openBackdrop,setOpenBackdrop,nameFromTrailer} = useContext(moviesContext);
    
    const handleCloseBackdrop = () => {
        setOpenBackdrop(false)
    }

    const opts = {
      hegth: "390",
      width: '100%',
      playerVars: {
         autoplay:1,
      },
    }

    useEffect(() => {
        if (trailerUrl) {
         setTrailerUrl('');
        }else{
         
         movieTrailer( nameFromTrailer || '')
         .then(url => {
           const urlParams = new URLSearchParams(new URL(url).search);
           setTrailerUrl(urlParams.get('v')); 
         }).catch(error => console.log(error))
        }
      return () => {
         setTrailerUrl('');
      }
    },[nameFromTrailer])

  return (
     <>
        <Backdrop 
        sx={{color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
        >
         <Box sx={{width: '100%',display: 'flex',flexDirection: 'column'}}>
          <Box sx={{width: '100%'}}>
            {trailerUrl?  <YouTube videoId={trailerUrl} opts={opts}/>: <Loading Height={'100%'} text={'please whaie'}/> }
          </Box>
          <Stack direction="row" spacing={2} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center', marginTop: '2rem'}}>
            <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
             >
            B
            </Avatar>
            <Avatar
             sx={{ bgcolor: deepOrange[500] }}
             alt="Remy Sharp"
            />
            <Avatar
             sx={{ bgcolor: deepOrange[500] }}
             alt="Remy Sharp"
            />
            <Avatar
             sx={{ bgcolor: deepOrange[500] }}
             alt="Remy Sharp"
            />
            <Avatar
             sx={{ bgcolor: deepOrange[500] }}
             alt="Remy Sharp"
            />
          </Stack>
          </Box>
         </Backdrop>
     </>
  )
}

export default BackDrop;
