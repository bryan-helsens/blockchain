import React from 'react'
import Image from 'next/image'
import MoreButton from '../components/buttons/MoreButton'
import TrendingCardRow from '../components/TrendingCardRow'

const styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`,
}

const TrendingCard = ({ title, icon, trendingData }) => {
    console.log(trendingData, 'trend');

    const isIncremented = (percent_24h) => {
        if (percent_24h.substring(0,1) !== "-" ) return true
    }

  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className="flex">
                {icon && <Image src={icon} width={27} height={27} alt="icon" title="icon" />}
                &nbsp;&nbsp;
                <p className="font-bold">{title}</p>
            </div>

            <MoreButton />
        </div>

        <br />

        {trendingData && trendingData ? ( trendingData.map((item, index) => {
            console.log(item.price_change_percentage_24h, "testing");
            return (
                <TrendingCardRow
                    key={index}
                    number={item.market_cap_rank}
                    symbol={item.symbol}
                    name={item.name}
                    icon={item.image}
                    isIncrement={isIncremented(item.price_change_percentage_24h.toString())}
                    rate={(item.price_change_percentage_24h).toFixed(2)}
                />
            )
        })
        ):(
            <></>
        )}
    </div>
  )
}

export default TrendingCard