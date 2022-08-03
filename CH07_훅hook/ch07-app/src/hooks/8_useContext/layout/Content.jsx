import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Slider from '../ui/Slider';

function Content() {

    const styles = {
        h5: {
            marginTop: 100
        },

        main: {
            height: 750,
            color: 'gray',
            backgroundColor: 'white',
        }
    };

    const {isDark} = useContext(ThemeContext);

    const setDark = ()=> {
        return {...styles.main, backgroundColor:'#1B2631', color:'#fff'}
    }

  return (
    <main style={isDark ? setDark() : styles.main}>
        <div className='container text-center'>
            <Slider />
        </div>
    </main>
  )
}

export default Content