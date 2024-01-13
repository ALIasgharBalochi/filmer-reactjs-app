import Banner from '../Banner';
import HomeContent from './HomeContent';

const Home = () => {

  return (
    <>
          <div style={{ marginTop: '2.9rem' }}>
            <Banner />
            <div className='div-baner'>
             <HomeContent />
            </div>
          </div>
    </>
  )
}

export default Home;