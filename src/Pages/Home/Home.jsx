import React from 'react'
import './Home.css'
import Siderbar from '../../Components/Sidebar/Siderbar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
    <Siderbar sidebar={sidebar}  />
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed />
    </div>
    </>
  )
}

export default Home