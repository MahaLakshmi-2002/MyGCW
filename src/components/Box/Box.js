import React, { useState, useRef, useEffect } from 'react';
import './Box.css';

const Box = ({ title, image, shortContent, expandedContent, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [buttonText, setButtonText] = useState('Read More');
  const [expandedHeight, setExpandedHeight] = useState(0);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    setButtonText(prevText => (prevText === 'Read More' ? 'Read Less' : 'Read More'));
  };

  const boxRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      setExpandedHeight(boxRef.current.scrollHeight);
    } else {
      setExpandedHeight(0);
    }
  }, [expanded]);

  const isEven = index % 2 === 0;

  return (
    <div
      className={`box ${isEven ? 'even' : 'odd'}`}
      style={{ height: expanded ? expandedHeight + 'px' : '490px' }}
      ref={boxRef}
    >
      <div className="transparent-area"></div> 
      {isEven ? (
        <>
          <div className="text-container">
            <div className={`box-title ${expanded ? 'expanded' : ''}`} onClick={handleToggle}>
              <h2>{title}</h2>
            </div>
            <div className={`short-content ${expanded ? 'hidden' : ''}`}>
              <p>{shortContent}</p>
            </div>
            {expanded && <div className="expanded-content">{expandedContent}</div>}
            <div className={`toggle-button ${expanded ? 'expanded' : ''}`} onClick={handleToggle}>
              <button className="read-more-button">{buttonText}</button>
            </div>
          </div>
          <div className="image-container">
            <img src={image} alt="Box Image" className={`box-image ${expanded ? 'expanded' : ''}`} />
          </div>
        </>
      ) : (
        <>
          <div className="image-container">
            <img src={image} alt="Box Image" className={`box-image ${expanded ? 'expanded' : ''}`} />
          </div>
          <div className="text-container">
            <div className={`box-title ${expanded ? 'expanded' : ''}`} onClick={handleToggle}>
              <h2>{title}</h2>
            </div>
            <div className={`short-content ${expanded ? 'hidden' : ''}`}>
              <p>{shortContent}</p>
            </div>
            {expanded && <div className="expanded-content">{expandedContent}</div>}
            <div className={`toggle-button ${expanded ? 'expanded' : ''}`} onClick={handleToggle}>
              <button className="read-more-button">{buttonText}</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Box;
