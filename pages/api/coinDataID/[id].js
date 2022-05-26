export default function handler(req, res) {
    const { id } = req.query
    const getCoinDataById = async () => {
        const response = await fetch(
            //`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}&limit=${process.env.API_GET_COINS_LIMIT}`,
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${id}&per_page=10&order=market_cap_rank&price_change_percentage=24h,7d`,
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

    getCoinDataById()
}