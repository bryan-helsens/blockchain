import { createContext, useState, useEffect } from 'react'

export const BlockchainProjectContext = createContext()

export const BlockchainProjectProvider = ({children}) => {

    const getTrendingCoins = async () => {
        try {
            const res = await fetch('/api/TrendingCoins')
            const data = await res.json()
            return data.data.coins
        } catch (e) {
            console.error(e);
        }
    }

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/GetTopTenCoins')
            const data = await res.json()
            return data.data
        } catch (e) {
            console.error(e)
        }
    }

    const getCoinDataWithID = async (id) => {
        try {
            const res = await fetch(`/api/coinDataID/${id}`)
            const data = await res.json()
            return data.data
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <BlockchainProjectContext.Provider
            value= {{
                getTrendingCoins,
                getTopTenCoins,
                getCoinDataWithID,
            }}
        >
            {children}
        </BlockchainProjectContext.Provider>
    )
}