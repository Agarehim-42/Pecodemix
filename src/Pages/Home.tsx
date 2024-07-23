import React from 'react'
import Awards from '../components/Awards'
import Clients from '../components/Clients'
import DeepLearning from '../components/DeepLearning'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Shirketler from '../components/Shirketler'

const Home:React.FC = () => {
  return (
    <div>
        <Introduction/>
      <Shirketler/>
      <DeepLearning/>
      <Awards/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Home