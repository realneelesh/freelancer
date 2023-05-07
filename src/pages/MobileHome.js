import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
import AviatohImg from '../assets/aviatoh.png';
import Alice from '../assets/alice.png';
import Archana from '../assets/archana.mov';

function MobileHome(props) {
    return (
        <> 
         <div style={{
            width: '100vw', 
            // background colour semi white
            backgroundColor: 'transparent',
            color: 'grey', 
           
            
        }}>
         {/* <h1
         align="right"
        style={{padding: '25px 20px'}}
        >Projects
        </h1>  */}
                <div  style={{ backgroundColor: 'transparent', height: '40vh',  display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',}}>
        {/* <h1
        style={{padding: '0px 20px', color: 'grey'}}
        >Freelance Profile</h1>
          */}  
            <h3 align="left" style={{backgroundColor: 'transparent', fontWeight: '500', width: '60vw', padding: '6px 0px', margin: '0px'}}>&nbsp;&nbsp;&nbsp;&nbsp; Freelance Profile </h3> 


<div style={{paddingLeft: '2px'}}>

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
        {/* <br/> Starting from <h2 style={{display: 'inline', fontWeight: '300'}}>$120 per Project</h2> */}
       
        <br/> Education: <h2 style={{display: 'inline', fontWeight: '300'}}>IIT </h2>Roorkee
        </div> 
        <br/>
        <br/>
        </div> 
        </div>
        </div>
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
            height: '60vh',
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
            <ProjectCard isMobile={true} title="A.D. Design" type="Portfolio" description="fasfdsf asdfa" video={Archana} link="https://archanadesign.com"/>

            <ProjectCard isMobile={true} type="Documentation System" title="Aviatoh" link="https://aviatoh.com" image={AviatohImg} />

            <ProjectCard isMobile={true} title="Alice Banting" type="Portfolio" description="fasfdsf asdfa" image={Alice} link="https://alicebanting.com" />




<div 
style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'grey', position: 'absolute',
top: '16vh', right: '0'}}
>
<a href="https://www.linkedin.com/in/neelesh-sharma-6178971aa/" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-facebook"></a>  

<a href="https://www.instagram.com/consultant_developer/" class="fa fa-instagram"></a>
</div>


                </div>

         
        </>
    );
}

export default MobileHome;