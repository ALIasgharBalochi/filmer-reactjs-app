import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ButtonSwitched = ({switched,setSwitched}) => {
    const changeSwitched = () => {
        setSwitched(!switched)
    }
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      sx={{direction: 'ltr'}}
      color='inherit'
    >
      
      {switched?<Button onClick={changeSwitched} sx={{backgroundColor: 'whitesmoke',color: "#924f22"}}>سریال</Button>:<Button onClick={changeSwitched} sx={{backgroundColor: '#000000',color: "#924f22"}}>سریال</Button> }
      {switched?<Button onClick={changeSwitched} sx={{backgroundColor: '#000000',color: "#924f22"}}>سینمایی </Button>:<Button onClick={changeSwitched} sx={{backgroundColor: 'whitesmoke',color: "#924f22"}}>سینمایی</Button> }
    </ButtonGroup>
  );
}
export default ButtonSwitched;
