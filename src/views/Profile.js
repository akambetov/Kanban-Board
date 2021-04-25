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
              <li><strong>Date of Birth</strong>: 30.07.1990</li>
              <li><strong>Place of Birth:</strong> Almaty (Kazakhstan)</li>
              <li><strong>Place of Residence:</strong> Almaty (Kazakhstan)</li>
              <li>
                <hr />  
              <strong>Education</strong>
                <ul>
                  <li><strong>School:</strong> #62, 2008</li>
                  <li><strong>College:</strong> AUPET, 2012</li>
                </ul> 
                <hr />  
              </li>             
              <li><strong>Work experience</strong>: Network engineer, 2013-2021</li>
              <hr />  
              <li><strong>Hobby</strong>
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