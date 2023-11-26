
import React from 'react';
import Card from './Card';
import './CardsContainer.css'; // Archivo de estilo CSS

const CardsContainer = () => {
    const cardsData = [
        {
            image: 'https://www.visa.com/images/merchantoffers/2023-05/1684357885442.airport-companion-1134x430.jpg',
            title:"Visa Airport Companion",
            description: "Transforma cada viaje en una experiencia única con beneficios en aeropuertos de todo el mundo, en restaurantes y tiendas, acceso a salas VIP y más.",
            link: "https://www.visa.com.ar/es_ar/promociones/visa-airport-companion/153826?locale=es_ar",
            botones: [
                {
                    text:'Visa Signature',
                    bgColor: '#332f2c',
                    visible: true
                }, 
                {
                    text:'Visa Platinum',
                    bgColor: '#96918c',
                    visible: true
                },
                {
                    text:'Visa Gold',
                    bgColor: '#c2a161',
                    visible: false
            }]
        },
        {
            image: 'https://www.visa.com/images/merchantoffers/2023-03/1678237361051.servicios-medicos-emergencia-1134x430.jpg',
            title:"Servicios Médicos de Emergencia Internacional",
            description: "Visa te brinda la protección que necesitas al viajar con el Seguro Médico de Emergencia Internacional. Con Visa viajas tranquilo con asistencia médica.",
            link: "https://www.visa.com.ar/es_ar/promociones/servicios-medicos-de-emergencia-internacional/153027?locale=es_ar",
            botones: [{
                    text:'Visa Signature',
                    bgColor: '#332f2c',
                    visible: true
                }, {
                    text:'Visa Platinum',
                    bgColor: '#96918c',
                    visible: true
                },
                {
                    text:'Visa Gold',
                    bgColor: '#c2a161',
                    visible: false
            }]
        },
        {
            image: 'https://www.visa.com/images/merchantoffers/2023-07/1690472081529.proteccion-compra-608x220.jpg',
            title:"Protección de Compra",
            description: "Al pagar con Visa tienes más beneficios. Automáticamente, recibes protección contra robo o daños accidentales de tu compra. Conoce más.",
            link: "https://www.visa.com.ar/es_ar/promociones/proteccion-de-compra/153012?locale=es_ar",
            botones: [{
                    text:'Visa Signature',
                    bgColor: '#332f2c',
                    visible: true
                }, {
                    text:'Visa Platinum',
                    bgColor: '#96918c',
                    visible: true
                },
                {
                    text:'Visa Gold',
                    bgColor: '#c2a161',
                    visible: true
            }]
        },
        {
            image: 'https://www.visa.com/images/merchantoffers/2023-02/1676297153785.star_-1134x430.jpg',
            title:"Star+",
            description: "Paga tu suscripción con tu Visa Platinum o Visa Signature y recibe hasta 4 meses de regalo.",
            link: "https://www.visa.com.ar/es_ar/promociones/star/152873?locale=es_ar",
            botones: [{
                    text:'Visa Signature',
                    bgColor: '#332f2c',
                    visible: true
                }, {
                    text:'Visa Platinum',
                    bgColor: '#96918c',
                    visible: true
                },{
                    text:'Visa Gold',
                    bgColor: '#c2a161',
                    visible: false
            }]
        }
    ];

    return (
        <div className="cards-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    buttonsData={card.botones}
                    description={card.description}
                    link= {card.link}
                />
            ))}
        </div>
    );
};

export default CardsContainer;