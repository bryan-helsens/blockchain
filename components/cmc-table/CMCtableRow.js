import React from 'react'
import Star from '../../assets/svg/star'
import CoinNameRow from './coin/CoinNameRow'
import Rate from './Rate'
import More from '../../assets/svg/More'
import Image from 'next/image'

const styles = {
    tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
}

const CMCtableRow = ({
    starNum,
    coinName,
    coinSymbol = '---',
    coinIcon,
    hRate = '---',
    dRate = '---',
    hRateIsIncrement,
    dRateIsIncrement,
    price = '---',
    marketCapValue = '---',
    volumeValue = '---',
    circulatingSupply = '---',
}) => {

    const viewCoinDetails = () => {
        //TODO
    }

    const viewPrice = () => {
        //TODO
    }

    const formatNum = num => {
        if (num === null) return '/'
        return Number(num.toFixed(2)).toLocaleString()
    }

  return (
    <tbody className={styles.tableRow}>
        <tr>
            <td>
                <Star />
            </td>
            <td>{starNum}</td>

            {coinIcon && coinIcon ? (
                <td className='cursor-pointer'>
                    <CoinNameRow
                    name={coinName}
                    icon={coinIcon}
                    clicked={viewCoinDetails}
                    />
                </td>
            ) : (
                <></>
            )}

            <td className='cursor-pointer' onClick={viewPrice}>
                <p>€ {formatNum(price)}</p>
            </td>
            <td>
                <Rate isIncrement={hRateIsIncrement} rate={`${formatNum(hRate)}`} />
            </td>
            <td>
                <Rate isIncrement={dRateIsIncrement} rate={`${formatNum(dRate)}`} />
            </td>

            <td>
            <div>
                <p>€ {formatNum(marketCapValue)}</p>
            </div>
            </td>

            <td>
                <div>
                    <p>€ {formatNum(volumeValue)}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{formatNum(circulatingSupply)} {coinSymbol}</p>
                </div>
            </td>

            <td>
                <Image src={`https://www.coingecko.com/coins/${starNum}/sparkline`} width={250} height={100} alt='' />
            </td>

            <td>
                <More />
            </td>
        </tr>
    </tbody>
  )
}

export default CMCtableRow