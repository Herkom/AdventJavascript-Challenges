import {useState} from 'react';
import gear from '../images/gear.svg';

const Timer = () => {

    const [minutesState, setMinutesState] = useState('15');
    const [secondsState, setSecondsState] = useState('00');

    const startTimer = () => {

    }

    const pauseTimer = () => {

    }

    return (
        <div className="wrapper">
            <div className="ring">
                <svg width="518" height="518" viewBox="0 0 518 518">
                    <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
                </svg>
            </div>

            <div className="timer">
                <div className="time">
                    <div className="minutes">
                        <input type="text" value={minutesState} />
                    </div>
                    <div className="colon">:</div>
                    <div className="seconds">
                        <input type="text" value={secondsState} />
                    </div>
                </div>
                <button className="start" onClick={()=>{}} >start</button>
                <button className="settings">
                    <img src={gear} alt="Settings" />
                </button>
            </div>
        </div>
    )
}

export default Timer;