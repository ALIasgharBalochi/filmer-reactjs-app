import React, {useEffect, useState } from 'react'

import RowContent from './RowContent';
import RowControler from './RowControler';

const Row = ({ title, movies, isLoading, series }) => {

  const [moviesState, setMoivesState] = useState([]);
  const [switched, setSwitched] = useState(false)

  useEffect(() => {
    if (isLoading) {
      console.log('please whate ');
    } else {
      if (switched) {
        setMoivesState(series)
      } else {
        setMoivesState(movies)
      }
    }
  }, [isLoading, movies, switched])

  return (
    <>
      <RowControler setSwitched={setSwitched} switched={switched} title={title}/>
      <RowContent switched={switched} moviesState={moviesState}/>
    </>
  )
}
export default Row;






















