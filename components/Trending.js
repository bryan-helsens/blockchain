import React, { useState, useContext, useEffect, useCallback } from 'react'
import TrendingCard from '../components/TrendingCard'

import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import fire from "../assets/fire.png"
import ReactSwitch from "react-switch"

import { BlockchainProjectContext } from '../context/context'

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center`,
    invisible: `invisible`,
    visible: 'visible'
}

/*const testData = 
[
    {
        "data": {
          "status": {
            "timestamp": "2022-05-26T12:02:09.824Z",
            "error_code": 0,
            "error_message": null,
            "elapsed": 20,
            "credit_count": 1,
            "notice": null,
            "total_count": 10052
          },
          "data": [
            {
              "id": 1,
              "name": "Bitcoin",
              "symbol": "BTC",
              "slug": "bitcoin",
              "num_market_pairs": 9466,
              "date_added": "2013-04-28T00:00:00.000Z",
              "tags": [
                "mineable",
                "pow",
                "sha-256",
                "store-of-value",
                "state-channel",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "galaxy-digital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio"
              ],
              "max_supply": 21000000,
              "circulating_supply": 19049825,
              "total_supply": 19049825,
              "platform": null,
              "cmc_rank": 1,
              "self_reported_circulating_supply": null,
              "self_reported_market_cap": null,
              "last_updated": "2022-05-26T12:01:00.000Z",
              "quote": {
                "USD": {
                  "price": 29016.812637632233,
                  "volume_24h": 31071108745.80299,
                  "volume_change_24h": 4.1389,
                  "percent_change_1h": -0.38863693,
                  "percent_change_24h": -1.26702603,
                  "percent_change_7d": -1.58276909,
                  "percent_change_30d": -28.30243549,
                  "percent_change_60d": -34.88640175,
                  "percent_change_90d": -25.13609564,
                  "market_cap": 552765202804.6825,
                  "market_cap_dominance": 45.4823,
                  "fully_diluted_market_cap": 609353065390.28,
                  "last_updated": "2022-05-26T12:01:00.000Z"
                }
              }
            },
            {
              "id": 1027,
              "name": "Ethereum",
              "symbol": "ETH",
              "slug": "ethereum",
              "num_market_pairs": 5730,
              "date_added": "2015-08-07T00:00:00.000Z",
              "tags": [
                "mineable",
                "pow",
                "smart-contracts",
                "ethereum-ecosystem",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "hashkey-capital-portfolio",
                "kenetic-capital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio",
                "injective-ecosystem",
                "bnb-chain"
              ],
              "max_supply": null,
              "circulating_supply": 120929219.249,
              "total_supply": 120929219.249,
              "platform": null,
              "cmc_rank": 2,
              "self_reported_circulating_supply": null,
              "self_reported_market_cap": null,
              "last_updated": "2022-05-26T12:00:00.000Z",
              "quote": {
                "USD": {
                  "price": 1817.8327565680972,
                  "volume_24h": 17364077653.384903,
                  "volume_change_24h": 23.3109,
                  "percent_change_1h": -0.94356288,
                  "percent_change_24h": -6.61830317,
                  "percent_change_7d": -7.37078193,
                  "percent_change_30d": -39.4547624,
                  "percent_change_60d": -42.20526536,
                  "percent_change_90d": -30.99661619,
                  "market_cap": 219829095977.03748,
                  "market_cap_dominance": 18.0879,
                  "fully_diluted_market_cap": 219829095977.04,
                  "last_updated": "2022-05-26T12:00:00.000Z"
                }
              }
            },
            {
              "id": 825,
              "name": "Tether",
              "symbol": "USDT",
              "slug": "tether",
              "num_market_pairs": 33874,
              "date_added": "2015-02-25T00:00:00.000Z",
              "tags": [
                "payments",
                "stablecoin",
                "asset-backed-stablecoin",
                "avalanche-ecosystem",
                "solana-ecosystem",
                "arbitrum-ecosytem",
                "moonriver-ecosystem",
                "injective-ecosystem",
                "bnb-chain",
                "usd-stablecoin"
              ],
              "max_supply": null,
              "circulating_supply": 73275094959.00745,
              "total_supply": 79713622661.52214,
              "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
              },
              "cmc_rank": 3,
              "self_reported_circulating_supply": null,
              "self_reported_market_cap": null,
              "last_updated": "2022-05-26T12:00:00.000Z",
              "quote": {
                "USD": {
                  "price": 0.9990186815535002,
                  "volume_24h": 57477298060.47325,
                  "volume_change_24h": 3.7649,
                  "percent_change_1h": 0.00869794,
                  "percent_change_24h": -0.00179835,
                  "percent_change_7d": 0.01533072,
                  "percent_change_30d": -0.11247576,
                  "percent_change_60d": -0.14673658,
                  "percent_change_90d": -0.17012342,
                  "market_cap": 73203188756.65515,
                  "market_cap_dominance": 6.0267,
                  "fully_diluted_market_cap": 79635398213.17,
                  "last_updated": "2022-05-26T12:00:00.000Z"
                }
              }
            },
            {
              "id": 3408,
              "name": "USD Coin",
              "symbol": "USDC",
              "slug": "usd-coin",
              "num_market_pairs": 4056,
              "date_added": "2018-10-08T00:00:00.000Z",
              "tags": [
                "medium-of-exchange",
                "stablecoin",
                "asset-backed-stablecoin",
                "fantom-ecosystem",
                "arbitrum-ecosytem",
                "moonriver-ecosystem",
                "bnb-chain",
                "usd-stablecoin"
              ],
              "max_supply": null,
              "circulating_supply": 53403991881.66236,
              "total_supply": 53403991881.66236,
              "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
              },
              "cmc_rank": 4,
              "self_reported_circulating_supply": null,
              "self_reported_market_cap": null,
              "last_updated": "2022-05-26T12:00:00.000Z",
              "quote": {
                "USD": {
                  "price": 1.0005091181443841,
                  "volume_24h": 5601908329.983594,
                  "volume_change_24h": 22.94,
                  "percent_change_1h": 0.03456049,
                  "percent_change_24h": 0.04535158,
                  "percent_change_7d": -0.03127833,
                  "percent_change_30d": 0.03960876,
                  "percent_change_60d": 0.05581027,
                  "percent_change_90d": 0.0136662,
                  "market_cap": 53431180822.91186,
                  "market_cap_dominance": 4.3986,
                  "fully_diluted_market_cap": 53431180822.91,
                  "last_updated": "2022-05-26T12:00:00.000Z"
                }
              }
            },
            {
              "id": 1839,
              "name": "BNB",
              "symbol": "BNB",
              "slug": "bnb",
              "num_market_pairs": 876,
              "date_added": "2017-07-25T00:00:00.000Z",
              "tags": [
                "marketplace",
                "centralized-exchange",
                "payments",
                "smart-contracts",
                "alameda-research-portfolio",
                "multicoin-capital-portfolio",
                "moonriver-ecosystem",
                "bnb-chain"
              ],
              "max_supply": 165116760,
              "circulating_supply": 163276974.63,
              "total_supply": 163276974.63,
              "platform": null,
              "cmc_rank": 5,
              "self_reported_circulating_supply": null,
              "self_reported_market_cap": null,
              "last_updated": "2022-05-26T12:00:00.000Z",
              "quote": {
                "USD": {
                  "price": 310.9670381205036,
                  "volume_24h": 2336687034.8905516,
                  "volume_change_24h": 12.2881,
                  "percent_change_1h": -0.44493101,
                  "percent_change_24h": -4.38833745,
                  "percent_change_7d": 3.07674862,
                  "percent_change_30d": -22.35745414,
                  "percent_change_60d": -25.18264102,
                  "percent_change_90d": -14.12389961,
                  "market_cap": 50773757193.96771,
                  "market_cap_dominance": 4.1799,
                  "fully_diluted_market_cap": 51345869801.25,
                  "last_updated": "2022-05-26T12:00:00.000Z"
                }
              }
            }
          ]
        }
      }
]*/

const Trending = () => {

    let { getTrendingCoins, getCoinDataWithID } = useContext(BlockchainProjectContext)
    let [trendingCoins, setTrendingCoins] = useState(null)
    const [checked, setChecked] = useState(true)

    const TrendingCoins = useCallback(async () => {
      try {
          let apiResponse = await getTrendingCoins()
          return apiResponse

      } catch (e) {
          console.error(e)
      }
  }, [getTrendingCoins])




    // mss mag deze functie weg als TrendingCoins via useEffect loopt!
    const getData = () => {
      console.log("data");
      TrendingCoins()
      //if (checked) setTrendingCoins(testData[0].data.data)
    }

    const getTrendingData = useCallback (async (data) => {
      let coinsData = []

      console.log(data);

      await data.map(async (item, index) => {
        console.log(item.item, 'item');
        let apiResponseData = await getCoinDataWithID(item.item.id)

        coinsData.push(apiResponseData[0])
      })

      setTrendingCoins(null)
      setTrendingCoins(coinsData)

    },[])


    useEffect(async () => {
      let data = await TrendingCoins()
      await getTrendingData(data)

    }, [TrendingCoins, getTrendingData])


   



 


    console.log(trendingCoins, "boe");


  return (
    <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>Todays Cryptocurrency Prices</h1>

                <div className="flex">
                    <p className="text-gray-400 ">Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) & getData() }} />
                </div>
            </div>

            <br />

            <div className={`${styles.flexCenter} ${checked ? styles.visible : styles.invisible}`}>
                <TrendingCard title="Trending" icon={fire} trendingData={trendingCoins} />
                <TrendingCard title="Biggest Gainers" icon={gainers} trendingData={trendingCoins} />
                <TrendingCard title="Recently Added" icon={recent} trendingData={trendingCoins} />
            </div>
        </div>
    </div>
  )
}

export default Trending