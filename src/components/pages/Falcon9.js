import React from 'react';
import '../../App.css';
import { gql, useQuery } from '@apollo/client';
import Loader from './Loader';
import './../HeroSection.css';
import BasicTable from '../Table';

const GET_ROCKET_INFO = gql`

{
    rocket(id: "falcon9") {
      name
      height {
        meters
      }
      diameter {
        meters
      }
      stages
      cost_per_launch
    }
  }
  
`;

export default function Falcon9() {
    const { data, loading, error } = useQuery(GET_ROCKET_INFO);
    if (loading) return <Loader />;
    if (error) return <Loader />;

    return (
        <div className='hero-container falcon9'>

            <h1>{data.rocket.name}</h1>
            <BasicTable
                height={data.rocket.height.meters}
                diameter={data.rocket.diameter.meters}
                stages={data.rocket.stages}
                cpl={data.rocket.cost_per_launch}
            />
            

        </div>

    )
}
