import React from "react";

type CurrentMoneyType={
    currentMoney: Array<MoneyType>
    onClickFilterHandler: Function
}

type MoneyType={
    banknots: string,
    value: number,
    number: string
}

export const NewComponent =(props: CurrentMoneyType)=>{
    console.log(props)
    return(
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots} </span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('RUBLES')}>Rubles</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollar</button>
            </div>
        </>
    )
}