import React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import './HeroSection.css';
//
import Loader from './pages/Loader';

import { gql, useQuery } from '@apollo/client';


const GET_COMPANY_INFO = gql`
{
    company {
      name
      summary
    }
  }`


function HeroSection() {
  const { data, loading, error } = useQuery(GET_COMPANY_INFO);

  if (loading) return <Loader />
  if (error) return 'Error'
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>{data.company.name}</h1>
      <p>{data.company.summary}</p>
      <div className='hero-btns'>
        <Button variant="contained" color="success">See more</Button>

      </div>
    </div>
  );
}

export default HeroSection;
