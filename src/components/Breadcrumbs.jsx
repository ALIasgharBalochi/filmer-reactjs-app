import { Breadcrumbs,Link } from '@mui/material'

const BreadCrumbs = () => {
  return (
    <Breadcrumbs sx={{direction: 'rtl',color: 'whitesmoke',display: {
        xs: 'none',
        sm: 'block',
        md: 'block'
      }}} aria-label="breadcrumb">
        <Link underline="hover" sx={{color: 'whitesmoke'}}  href="/">
          خانه
        </Link>
        <Link
          underline="hover"
          sx={{color: 'whitesmoke'}}
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          دانلود فیلم
        </Link>
      </Breadcrumbs>
  )
}

export default BreadCrumbs;
