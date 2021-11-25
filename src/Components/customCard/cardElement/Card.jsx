import React from 'react';
import './Card.css';

function Card({name, icon, image1, image2, image3, colorForButton}) {

    let classForButton = `bg-transparent hover:bg-${colorForButton}-500 text-${colorForButton}-700 font-semibold hover:text-white py-2 px-4 border border-${colorForButton}-500 hover:border-transparent rounded justify-between`;
    let classForImages = "w-10 h-10 rounded-full mr-4 mt-4";
    let classForPart = "flex items-center text-sm justify-around px-6 pt-4 pb-2";

    return (
        <div className= "rounded-3xl overflow-hidden px-6 pt-6 pb-6 max-w-sm max-h-sm bg-white">
              <img className={classForImages} src={icon}/>
              <div className={classForPart}>
                        <p className="text-gray-900 font-bold text-xl mb-2">{name}</p>
                        <button className={classForButton}>
                            Detail
                        </button>
              </div>
              <p className="text-gray-900 leading-none px-6 pt-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className={classForPart}>
                    <img className={"inline-block " + classForImages} src={image1}/>
                    <img className={"inline-block " + classForImages} src={image2}/>
                    <img className={"inline-block " + classForImages} src={image3}/>
              </div>
        </div>
    )
}

export default Card;