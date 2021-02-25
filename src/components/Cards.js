import React from 'react'
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
          <h1>Vende te cilat duhen vizituar te pakten nje here!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/divjaka.jpg'
                  text='Shetitje me varke ne lagunen e Karavastase,Divjake.'
                  label='Divjaka'
                  path='/services'
                />
                <CardItem
                  src='images/dardha.jpg'
                  text='Te eksplorosh bardhesine qe te fale debora e Dardhes,Korce.'
                  label='Dardhe'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='images/drilon.jpeg'
                  text='Driloni dhe Tushemishti jane nder qendrat turistike me te bukura te Shqiperise qe duhen vizituar me patjeter.'
                  label='Drilon'
                  path='/services'
                />
                <CardItem
                  src='images/gjirokastra.jpg'
                  text='Gjirokastra,nje mrekulli e gurte dhe e fshehur.'
                  label='Gjirokastra'
                  path='/products'
                />
                <CardItem
                  src='images/theth.jpg'
                  text='Hecjet mes alpeve dhe ushqimet traditcionale.'
                  label='Theth'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Cards;
