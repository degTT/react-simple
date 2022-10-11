import React, {useEffect, useRef, useState} from "react"
import './App.css'



const App = () => {
    const [person, setPerson] = useState({});
    const inputName = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputAge = useRef<HTMLInputElement | 0>(null);
    const [showInfo, setShowInfo] = useState(true);

    const submit = (e: any) => {
        e.preventDefault();
        if (inputName.current.value === '' || inputEmail.current.value === '' || inputAge.current.value === '') {
            setShowInfo(true);
            return;
        }
        setPerson({
            name: inputName.current.value,
            email: inputEmail.current.value,
            age: inputAge.current.value
        })
        setShowInfo(false);
    }

    const increaseAge = (e: any) => {
        setPerson({
            ...person,
            age: parseInt(person.age ) + 1
        })
    }

    /*
    const addCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }
    */

    return (

        <div className='layout'>
            {showInfo ?
                <div className="card">
                    <div className="card-header">
                        <span>Info</span>
                    </div>
                    <div className="card-body">
                        <p className='p-5 center-p'>
                            <label htmlFor="name">Nombre: </label>
                            <input className='custom-input' type='text' name='name' ref={inputName}/>
                        </p>
                        <p className='p-5 center-p'>
                            <label htmlFor="name">Correo: </label>
                            <input className='custom-input' type='email' name='email' ref={inputEmail}/>
                        </p>
                        <p className='p-5 center-p'>
                            <label htmlFor="name">Edad: </label>
                            <input className='custom-input' type='number' name='age' ref={inputAge}/>
                        </p>
                        <p className='p-5 center-p'>
                            <button className='custom-button' type='submit' value='enviar' onClick={submit}>Enviar
                            </button>
                        </p>
                    </div>
                </div> :
                <div className="card">
                    <div className="card-header">
                        <span>Info</span>
                    </div>
                    <div className="card-body">
                        <p className="p-5">{ person.name }</p>
                        <p className="p-5">{ person.email }</p>
                        <div className="div-divided">
                            <p className="p-5">{ person.age }</p>
                            <p className="p-5">
                                <button className='custom-button' type='button' onClick={ increaseAge }> Increase age
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default App
