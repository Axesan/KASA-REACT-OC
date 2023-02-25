import React ,{ useState,useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons';
const Caroussel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)



    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    // bouton pour changer d'image 
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }else if (currentIndex === (length - 1)){
            setCurrentIndex(prevState => prevState - length + 1)
        }
    }
    // boutons pour changer d'image
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
            
        }else if (currentIndex === 0){
            setCurrentIndex(prevState => prevState + length-1)
        }

       

    }


    // Gerer les evenement de balayage.
    
    const [touchPosition, setTouchPosition] = useState(null);
    
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }



    
    return (
        <div className="carousel-container">
        <div className="carousel-wrapper" onTouchStart={handleTouchStart}  onTouchMove={handleTouchMove}>

            <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" onClick={prev}/>
            <div className="carousel-content-wrapper" >
            
                <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  
                    {children}
                    
                </div>
                <span>{currentIndex+1} / {props.paginate}</span>
            </div>
           
            <FontAwesomeIcon icon={faChevronRight} className="right-arrow" onClick={next}/>
       
        </div>
    </div>
    );
};

export default Caroussel;