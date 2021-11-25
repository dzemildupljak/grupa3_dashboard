import React from 'react';
import Card from './cardElement/Card';
import image from './img/jonathan.jpg';

function Cards() {


    return (
        <>
        <Card name="Jonathan" icon={image} image1={image} image={image} image3={image} colorForButton="blue"></Card>
        <Card name="Jonathan" icon={image} image1={image} image={image} image3={image} colorForButton="green"></Card>
        <Card name="Jonathan" icon={image} image1={image} image={image} image3={image} colorForButton="orange"></Card>
        </>
    )
}

export default Cards;
