import React from 'react'
import HomeStyleWrapper from './home.style'
import landingPageImage from '../../assests/landingPageImage.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyleWrapper>
      <section className='information'>
        <h1 className='hook'>Imagine if <span>Snapchat</span> had events.</h1>
        <p>Easily host and share events with your friends across any social media</p>
      </section>
      <img src={landingPageImage} alt="lading page image" />
      <Button 
      className='create-btn' 
      onClick={() => navigate('/create')}
      text="🎉 Create my event" 
       />
    </HomeStyleWrapper>
  )
}

export default Home
