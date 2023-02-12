import React, { useState, useEffect } from 'react'

const DateCounter = () => {
    const [expiryTime, setExpiryTime] = useState("9 feb 2023 24:00:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownMinutes: "",
        countdownSeconds: "",
    });

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
            );

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
            };

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        }, 1000);
    };

    useEffect(() => {
        if (countdownTime.countdownSeconds > 0) {
            countdownTimer();
        }
    });

    return (
        <>
            <div className='sm:max-w-[300px] text-sm font-bold sm:text-1xl md:text-2xl lg:text-3xl flex items-center justify-between'>

                {countdownTime.countdownSeconds > 0 ? <>
                    <div className="block mr-4 md:my-2 lg:my-3">
                        <p>{countdownTime.countdownDays} :</p>
                        <p className="font-thin text-sm">D</p>
                    </div>

                    <div className="block mr-4 md:my-2 lg:my-3">
                        <p>{countdownTime.countdownHours} :</p>
                        <p className="font-thin text-sm">Hr</p>
                    </div>

                    <div className="block mr-4 md:my-2 lg:my-3">
                        <p>{countdownTime.countdownMinutes} :</p>
                        <p className="font-thin text-sm">Min</p>
                    </div>

                    <div className="block mr-4 md:my-2 lg:my-3">
                        <p>{countdownTime.countdownSeconds}</p>
                        <p className="font-thin text-sm">Sec</p>
                    </div>
                </> : ''}
            </div>

        </>
    )
}

export default DateCounter
