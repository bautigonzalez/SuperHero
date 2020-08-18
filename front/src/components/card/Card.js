import React from "react";
import ReactCardFlip from "react-card-flip";
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
                <img className="imgSuperhero" src={superhero.image.url} alt={superhero.name} onClick={handleClick}/>
                <div className="cardSuperhero" onClick={handleClick}>
                    <h3>{superhero.name}</h3>
                </div>
                </ReactCardFlip>
            </div>
    );
  };