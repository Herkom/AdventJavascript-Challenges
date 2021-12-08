import {useEffect, useState} from 'react'
import gear from '../images/gear.svg'

const Timer = () => {
    const milisOnMinute = 60000
    const milisOnSecond = 1000
    let cron
 
    const [timeState, setTimeState] = useState({minutes: '00', seconds:'00'})

    const minutesToMiliseconds = (minutes) => {
        console.log(minutes, ' minutes')
        return minutes * milisOnMinute
    }

    const secondsToMiliseconds = (seconds) => {
        console.log(seconds, ' seconds')
        return seconds * milisOnSecond
    }

    /* const timer = (miliseconds) => {

        const miliseconds = miliseconds

    } */
 
    const startTimer = () => { 
        pauseTimer()

        let totalMilis = minutesToMiliseconds(Number(timeState.minutes)) + secondsToMiliseconds(Number(timeState.seconds));

        console.log(totalMilis, ' miliseconds')

        cron = setInterval( ( )=>{
            totalMilis -= 10

            const remainingMinutes = Math.floor(totalMilis / milisOnMinute).toString()
            const remainingSeconds = ((totalMilis % milisOnMinute) / milisOnSecond).toFixed(0).toString()

            setTimeState(prevState => ({...prevState, minutes:remainingMinutes, seconds:remainingSeconds}))

            inputValueCleansed()

            console.log('After Cleansed by Interval')
            console.log('seconds', timeState.seconds, timeState.seconds.length)
            if(totalMilis === 0){
                setTimeState(prevState => ({...prevState, minutes:'00', seconds:'00'}))
                pauseTimer()
            }
         }, 10)

    }

    const pauseTimer = () => {
        clearInterval(cron)
    }
/* 
    const resetTimer = () => {
        setMinutesState('00');
        setSecondsState('00')
    }
*/
    const onChangeINputHandler = (e) => {
        if(e.target.id.includes('minutes')) return setTimeState( prevState => ({...prevState, minutes:e.target.value}) )
        
        setTimeState( prevState => ({...prevState, seconds:e.target.value}) )
    }

    const inputValueCleansed = () => {
        /* console.log('-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/')
        console.log('Before Cleansed')
        console.log('minutes', timeState.minutes, timeState.minutes.length)
        console.log('seconds', timeState.seconds, timeState.seconds.length)
        console.log('--------------------------------') */

        if (timeState.minutes.length === 1 ){
            setTimeState( prevState => ({...prevState, minutes:`0${timeState.minutes}`}) )
        }

        if (timeState.seconds.length === 1 ){
            setTimeState( prevState => ({...prevState, seconds:`0${timeState.seconds}`}) )
        }

        console.log('After Cleansed')
        console.log('seconds', timeState.seconds, timeState.seconds.length)
        /* console.log('+/+/+/+/+/+/+/+/+/+/+/+/+/+/+/')
        console.log('After Cleansed')
        console.log('minutes', timeState.minutes, timeState.minutes.length)
        
        console.log('+++++++++++++++++++++++++++++++') */
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
                        <input
                            id='minutesInput'
                            type="text"
                            value={timeState.minutes}
                            required
                            minLength='2'
                            maxLength='2'
                            onChange={onChangeINputHandler}
                            onBlur={()=>{inputValueCleansed(); console.log('onBlur')}}
                        />
                    </div>
                    <div className="colon">:</div>
                    <div className="seconds">
                        <input
                            id='secondsInput'
                            type="text"
                            value={timeState.seconds}
                            required
                            minLength='2'
                            maxLength='2'
                            onChange={onChangeINputHandler}
                            onBlur={()=>{inputValueCleansed(); console.log('onBlur')}}
                        />
                    </div>
                </div>
                <button className="start" onClick={startTimer} >start</button>
                <button className="settings">
                    <img src={gear} alt="Settings" />
                </button>
            </div>
        </div>
    )
}

export default Timer