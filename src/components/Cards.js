import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Cards.css';
import CardItem from './CardItem';
import Loader from './pages/Loader';


const GET_LAUNCHES_QUERY = gql`
{
    launchesPast(limit: 3) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      id
    }
  }
`;

function Cards() {
  const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);
    if (loading) return <Loader />
    if (error) return <Loader />

    const launches = data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    )
  return (
    <div className='cards'>
      <h1>Check out latest missions!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {launches.map(launch=>(
            <CardItem
              key={launch.id}
              src={launch.links.flickr_images[0]}
              text={launch.launch_site.site_name_long}
              label={launch.mission_name}
              link={launch.links.article_link}
            />
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
