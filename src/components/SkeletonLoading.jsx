

import Skeleton from 'react-loading-skeleton'

const SkeletonLoading = () => {
return(
         <Skeleton inline={true} count={20} style={{margin: '0 .5rem'}} width={100} height={200}/> 
    )
}
export default SkeletonLoading;