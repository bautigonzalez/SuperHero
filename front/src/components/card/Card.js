import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactCardFlip from "react-card-flip";
import ParallaxCard from 'react-parallax-card'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Radar from "../radar/Radar"
import {addFav, deleteFav} from "../../redux/action-creators/user"
import "./Card.scss"

export default ({superhero}) => {
    const [isFlipped, setIsFlipped] = React.useState(false)
    const user = useSelector(store => store.user.user)
    const dispatch = useDispatch()

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
                        <Link className="linkInfo" to={`/character/${superhero.id}`}><Button variant="contained">Info</Button></Link>
                        { user._id ? 
                        (!user.favs.includes(superhero.id) ? <Button 
                        onClick={()=>dispatch(addFav(user._id, superhero.id))} 
                        className="btnFav" 
                        variant="contained">
                        Add to favs
                        </Button> :
                        <Button 
                        onClick={()=>dispatch(deleteFav(user._id, superhero.id))} 
                        className="btnFav" 
                        variant="contained">
                        Delete fav
                        </Button>
                        ) : (null)}
                        <div style={{width:"100%", minHeight:"30%"}} onClick={handleClick}></div>
                    </div>
                </ReactCardFlip>
            </div>
    );
  };