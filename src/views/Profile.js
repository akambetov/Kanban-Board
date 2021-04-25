import React from 'react';
import Container from '../components/Container';
import MyPhoto from'../assets/img/me.jpg';

function Profile () {
  return (
    <Container>
      <div className='views-content'>
        <h1 className='views-title'>Almat Kambetov</h1>
        <div className='views-info'>
          <div className='views-info-photo'>
            <img src={MyPhoto} alt='avatar' />
          </div>
          <div className='views-info-list'>
            <ul>
              <li>Date of Birth: 30.07.1990</li>
              <li>Place of Birth: Almaty (Kazakhstan)</li>
              <li>Place of Residence: Almaty (Kazakhstan)</li>
              <li>
                Education
                <ul>
                  <li>School: #62, 2008</li>
                  <li>College: AUPET, 2012</li>
                </ul> 
              </li>             
              <li>Work experience: Network engineer, 2013-2021</li>
              <li>Hobby
                <ul>
                  <li>Running</li>
                  <li>Playing guitar</li>
                  <li>JS Programming</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;