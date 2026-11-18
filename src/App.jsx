import {useEffect, useState} from 'react'
import './App.css'

export default function App() {
    const [count, setCount] = useState(false);

    const handleChangeState = () => {
        setCount(!count)
    }


    console.log('Другой функционал вообще какойто ')


    return (
        <>
            <button
                style={{background: count ? 'red' : 'blue', height: '100px', width: '100px'}}
                onClick={() => handleChangeState()}
                className={'11111'}
            >

                {count}
            </button>
        </>
    )
}


