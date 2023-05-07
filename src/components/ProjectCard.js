import React from 'react';

function ProjectCard(props) {
    const { title, description, image, link, type, video, isMobile } = props;
    return (
        <div style={{width: isMobile ? '100vw' : '60vw', backgroundColor: 'rgb(255,255,255,0.1)'}}>
            
            <div align="center" style={{height: isMobile ? '60vh' : '100vh', display: 'flex', alignItems: 'center'}}> 
            <div>
            <div
            align="left"
                // make it a flex container
                style={{
                    width: isMobile ? '87%' : '70%',
                    //display: 'flex',
                    // center the content vertically
                    //justifyContent: 'space-between',
                    //alignItems: 'flex-end',
                    marginBottom: '35px'
                    // make it take up the full height and width of the screen
                }}
                >
                    <h1 align="left" style={{color: 'white', fontWeight: '300', padding: '0px', margin: '0px'}}>{title.toUpperCase()}</h1>
                    <span style={{marginBottom: '2px'}}> <h3 style={{display: 'inline', fontWeight: '300'}}> <span style={{color: 'white'}}>{type}</span></h3></span>

                </div>
            
 
                {image && <img src={image} alt={title} style={{width: isMobile ? '87%' : '70%', margin: 'auto', borderRadius: '0px', border: '4px solid grey'}} />}
                {video && <video src={video} alt={title} style={{width: isMobile ? '87%' : '70%', margin: 'auto', borderRadius: '0px', border: '4px solid grey', filter: 'grayscale(0)'}} autoPlay muted loop />}
                <br/>
                <div
                // make it a flex container
                style={{
                    width: isMobile ? '87%' : '70%',
                    display: 'flex',
                    // center the content vertically
                    justifyContent: 'space-between',
                    alignItems: 'center', 
                    marginTop: '5px'
                    // make it take up the full height and width of the screen
                }}
                > 
                    <a target={link} href={link} style={{
                        textDecoration: 'none',
                        color: 'skyblue'
                    }}><span>🔗 &nbsp; Visit Website</span></a>
                </div>
            
            </div></div>
            <br/>

        </div>
    );
}

export default ProjectCard;