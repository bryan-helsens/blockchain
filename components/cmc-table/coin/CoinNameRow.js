import React from 'react'
import Image from 'next/image'

const styles = {
    coinNameRow: 'flex items-center',
}

const CoinNameRow = ({
    name,
    icon,
    clicked
}) => {
  return (
    <div className={styles.coinNameRow}>
        <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">
            <Image
                src={icon}
                className='rounded-full'
                width={20}
                height={20}
                alt={name}
            />
        </div>
            {name}
        </div>
    </div>
  )
}

export default CoinNameRow