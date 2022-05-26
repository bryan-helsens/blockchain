import React, { useContext, useState, useEffect, useCallback } from 'react'
import { BlockchainProjectContext } from '../../context/context'
import CMCTableHeader from '../cmc-table/CMCTableHeader'
import CMCtableRow from '../cmc-table/CMCtableRow'

const styles = {
    h1: `text-3xl text-white mb-5`,
}

const CMCTable = () => {
    let { getTopTenCoins } = useContext(BlockchainProjectContext)
    let [coinsData, setCoinsData] = useState(null)

    useEffect(() => {
        setData()
    }, [])

    const setData = useCallback(async () => {
        try {
            const apiResponse = await getTopTenCoins()
      
            setCoinsData(apiResponse)
        } catch (e) {
            console.error(e);
        }
    }, [getTopTenCoins])

    console.log(coinsData);

    const isIncremented = (percent) => {
        if (percent.substring(0,1) !== "-" ) return true 
        return false
    }


  return (
    <div className='text-white font-bold'>

        <div className="flex justify-between font-normal">
                <h1 className={styles.h1}>Top 10 Cryptocurrencies</h1>
        </div>
     
        <div className='mx-auto max-w-screen-2xl block overflow-x-auto whitespace-nowrap'>
            <table className='w-full'>
                <CMCTableHeader />

                {coinsData && coinsData ? (
                    coinsData.map((coin, index) => {
                        return (
                        <CMCtableRow
                            key={index}
                            starNum={coin.market_cap_rank}
                            coinName={coin.name}
                            coinSymbol={coin.symbol}
                            coinIcon={coin.image}
                            hRate={coin.price_change_percentage_24h_in_currency}
                            dRate={coin.price_change_percentage_7d_in_currency}
                            hRateIsIncrement={isIncremented(coin.price_change_percentage_24h_in_currency.toString())}
                            dRateIsIncrement={isIncremented(coin.price_change_percentage_7d_in_currency.toString())}
                            price={coin.current_price}
                            marketCapValue={coin.market_cap}
                            volumeValue={coin.total_supply}
                            circulatingSupply={coin.circulating_supply}
                        />
                        )
                    })
                ) : (
                    <></>
                )}
            </table>
        </div>
    </div>
    )
}

export default CMCTable