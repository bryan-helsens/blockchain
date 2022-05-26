import React from 'react'
import Rate from './cmc-table/Rate'
import Image from 'next/image'

const styles = {
    trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, icon, name, symbol, isIncrement, rate }) => {
  return (
    <div className={styles.trendingCardRow}> 
        <p className="opacity-40">{number}</p>
        <div className="w-full flex items-center">
            <div className="mx-5 flex flex-column">
                {icon && <Image src={icon} width={25} height={25} />}
            </div>
            <p className='font-bold'>
                {name}
                <span className='text-gray-400'> {symbol}</span>
            </p>
        </div>
        <Rate isIncrement={isIncrement} rate={rate}/>
    </div>
  )
}

export default TrendingCardRow