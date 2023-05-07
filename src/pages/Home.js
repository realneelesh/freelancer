import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
import AviatohImg from '../assets/aviatoh.png';
import Alice from '../assets/alice.png';
import Archana from '../assets/archana.mov';

function Home(props) {
    return (
        <>
        <div
        
        ></div>
        <div style={{
            background: 'url(https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center center / cover no-repeat',
            // make background image fixed
            backgroundAttachment: 'fixed',
            overflow: 'scroll',
            // make it a flexbox with column direction
            display: 'flex',
            flexDirection: 'column',
            // center the content vertically
            // justifyContent: 'center',
            // make it take up the full height and width of the screen
            height: '100vh',
            width: '100vw',
            // add a semi-transparent black background on top of the background image
            //background: 'rgba(0, 0, 0)',
            // make the text white
            color: 'silver',
            // add some padding around the text
            // add a shadow to the text
            textShadow: '0 0 10px black',
            // add a class to the div
            // this will be used to style the div on smaller screens
            // see the app.css file
            className: 'home-banner'
        }}>
            <h3 align="right" style={{backgroundColor: 'rgb(255,255,255,0)', fontWeight: '500', width: '60vw', padding: '6px 0px', margin: '0px'}}>Recent Project Deliveries &nbsp;&nbsp;</h3> 
            <ProjectCard title="A.D. Design" type="Portfolio" description="fasfdsf asdfa" video={Archana} link="https://archanadesign.com"/>

<ProjectCard type="Documentation System" title="Aviatoh" link="https://aviatoh.com" image={AviatohImg} />

<ProjectCard title="Alice Banting" type="Portfolio" description="fasfdsf asdfa" image={Alice} link="https://alicebanting.com" />







        <div style={{
            width: '40vw',
            height: '100vh',
            // background colour semi white
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'white',
            position: 'absolute',
            top: '0',
            right: '0',
        }}>
         {/* <h1
         align="right"
        style={{padding: '25px 20px'}}
        >Projects
        </h1>  */}
                <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100vh'}}>
        {/* <h1
        style={{padding: '0px 20px', color: 'grey'}}
        >Freelance Profile</h1>
          */} 
<div style={{paddingLeft: '20px'}}>
    <br/>
        <h1
        style={{padding: '0px 20px'}}
        >Neelesh Sharma 
        </h1> 
        <div
        style={{padding: '0px 20px', marginTop: '-23px'}}
        >
                       <h3 style={{display: 'inline', fontWeight: '300'}}>Software Consultant</h3>
            <br/>
            <br/> 
            Experience:<h2 style={{display: 'inline', fontWeight: '300'}}> {new Date().toDateString().split(' ')[3]-2020} years</h2>
            <br/> Projects Delivered: <h2 style={{display: 'inline', fontWeight: '300'}}>15+</h2>
        <br/> Expertise: <h2 style={{display: 'inline', fontWeight: '300'}}>Web</h2> Solutions
        {/* <br/> Starting from <h2 style={{display: 'inline', fontWeight: '300'}}>$120</h2> per project */}
       
        <br/> Education: <h2 style={{display: 'inline', fontWeight: '300'}}>IIT </h2>Roorkee
        </div> 
        <div 
style={{display: 'flex', flexDirection: '', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'grey', position: 'absolute',
bottom: '35vh', right: '0'}}
>
<a href="https://www.linkedin.com/in/neelesh-sharma-6178971aa/" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-facebook"></a>  

<a href="#" class="fa fa-instagram"></a>
</div>
        </div> 
        </div>
        </div>

        
        </div>
        </>
    );
}

export default Home;