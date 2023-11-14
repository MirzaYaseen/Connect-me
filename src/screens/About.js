import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Painter from '../assets/images/painter.jpg';
import Electrician from '../assets/images/electrician.jpg';
import Carpenter from '../assets/images/carpenter.jpg';
import AirConditioner from '../assets/images/air.jpg';
import ExpertsTools from '../assets/images/expertsTools.jpg';

function AboutPage() {
  return (
    <div>
      <Container style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <img
              src={Painter}
              alt="Learning Code"
              style={{ width: '100%', maxWidth: '100%', height: '95%' }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="h4" gutterBottom>
              About Connect Me
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Connect Me, your premier destination for a dynamic and interactive learning experience in the world of programming and technology. Whether you're an expert eager to explore the depths of your expertise or a service taker looking to benefit from professionals, we've created the perfect platform for you.
            </Typography>
            <Typography variant="body1" paragraph>
              At Connect Me, we believe in the power of knowledge and the importance of sharing it. Our platform brings together a diverse community of experts, service takers, and enthusiasts from all corners of the globe. We offer a wide range of resources, including tutorials, articles, forums, and interactive challenges, to help you on your journey to becoming an expert in your field.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team of experienced professionals and educators is dedicated to providing you with the most up-to-date and relevant content in your respective fields. We cover a variety of services, tools, and best practices, ensuring that you have access to the information you need to succeed.
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 2 }}>
              <Typography variant="body1" paragraph>
                At Connect Me, we believe in the power of knowledge and the importance of sharing it. Our platform brings together a diverse community of experts, service takers, and enthusiasts from all corners of the globe. We offer a wide range of resources, including tutorials, articles, forums, and interactive challenges, to help you on your journey to becoming an expert in your field.
              </Typography>
              <Typography variant="body1" paragraph>
                Our team of experienced professionals and educators is dedicated to providing you with the most up-to-date and relevant content in your respective fields. We cover a variety of services, tools, and best practices, ensuring that you have access to the information you need to succeed in your professional endeavors.
              </Typography>
            </div>
            <div style={{ flex: 1, marginLeft: '1rem' }}>
              <img
                src={Carpenter}
                alt="Professional Community"
                style={{ width: '100%', maxWidth: '100%', height: '95%' }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <div style={{  marginRight: '1rem' }}>
            <img
              src={ExpertsTools}
              alt="Third Image"
              style={{ width: '100%', maxWidth: '100%', height: '95%' }}
            />
          </div>
          <div style={{ marginRight: '1rem',}} >
            <img
              src={Electrician}
              alt="Third Image"
              style={{ width: '100%', maxWidth: '100%', height: '95%' }}
            />
          </div>
          <div >
            <img
              src={AirConditioner}
              alt="Third Image"
              style={{ width: '100%', maxWidth: '100%', height: '95%' }}
            />
          </div>
        </div>

        <Typography variant="body1" paragraph>
          What you can find on Connect Me:
        </Typography>
        <ul>
          <li>Tutorials on a wide range of services and technologies</li>
          <li>Interactive challenges to test and improve your skills</li>
          <li>An active community forum for discussions and Q&A</li>
          <li>Articles and blog posts on the latest trends and best practices</li>
          <li>Regularly updated content to keep you informed and inspired</li>
        </ul>
        <Typography variant="body1" paragraph>
          Connect Me is not just a website; it's a community of experts and service takers coming together to advance their knowledge and skills. We're excited to have you join us on this journey. Happy connecting!
        </Typography>
      </Container>
    </div>
  );
}

export default AboutPage;
