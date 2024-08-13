// Styles
import banner from '../../assets/Untitled .jpg'

function Home() {
    return (
      <>
        <p>🚘Home page🚘</p>
        <h2>This page is going to be a car dealership, where you can see lot of features, like year, milleage, type of engine, transmition, equipment and much more,</h2>
        <h3>Welcome to the future of car rentals</h3>
        <img src={banner} alt="" className='banner'/>
      </>
    )
  }

export default Home;