import React from 'react';
import './Card.css';
import { css } from '@emotion/react';
import image from '.././img/jonathan.jpg'

function Card({ime}) {

    let classForButton = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-between";
    let classForImages = "w-10 h-10 rounded-full mr-4 mt-4";
    let classForPart = "flex items-center text-sm justify-around px-6 pt-4 pb-2";

    return (
        <div className= "rounded-3xl overflow-hidden px-6 pt-6 pb-6 max-w-sm max-h-sm bg-white">
              <img className={classForImages} src={image}/>
              <div className={classForPart}>
                        <p className="text-gray-900 font-bold text-xl mb-2">{ime}</p>
                        <button className={classForButton}>
                            Detail
                        </button>
              </div>
              <p className="text-gray-900 leading-none px-6 pt-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className={classForPart}>
                    <img className={"inline-block " + classForImages} src={image}/>
                    <img className={"inline-block " + classForImages} src={image}/>
                    <img className={"inline-block " + classForImages} src={image}/>
              </div>
        </div>
    )
}

export default Card;