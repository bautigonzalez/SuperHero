import React from "react";
import ReactCardFlip from "react-card-flip";
import ParallaxCard from 'react-parallax-card'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Radar from "../radar/Radar"
import "./Card.scss"

export default ({superhero}) => {
    const [isFlipped, setIsFlipped] = React.useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped);
      };
    
    React.useEffect(() => {
        setIsFlipped(false)
    }, [superhero.name]);

    return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 divSuperhero">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <ParallaxCard
                        onClick={handleClick}
                        enableRotate
                        enableTransform
                        style={{height:300}}
                        hidden={isFlipped ? ("hidden"):(null)}
                        >
                        <img src={superhero.image.url} style={{ width: '100%', height: 300}} />
                        <div /><div /><div />
                        <p style={{ fontSize: '2rem', fontFamily:"'Bangers', cursive", textShadow:"3px 3px 3px black", paddingTop:15}}>
                            {superhero.name}
                        </p>
                        </ParallaxCard>
                    <div className="cardSuperhero">
                        <h3  onClick={handleClick}>{superhero.name} </h3>
                        <Radar characterData={superhero.powerstats} handleClick={handleClick}/>
                        <Link to={`/character/${superhero.id}`}><Button variant="contained">Info</Button></Link>
                        <div style={{width:"100%", minHeight:"40%"}} onClick={handleClick}></div>
                    </div>
                </ReactCardFlip>
            </div>
    );
  };