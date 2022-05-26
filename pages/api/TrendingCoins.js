export default function handler(req, res) {
    const getTrendingCoins = async () => {
        const response = await fetch(
            //`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}&limit=${process.env.API_GET_COINS_LIMIT}`,
            'https://api.coingecko.com/api/v3/search/trending',
            {
                method : 'GET',
                headers : {
                    Accept: '*/*'
                },
            },
        )

        console.log(response);

        const data = await response.json()
        res.status(200).json({data})
    }

    getTrendingCoins()
}