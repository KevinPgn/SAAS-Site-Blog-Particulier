export const plans = [
    {
        link: process.env.NODE_ENV === 'development' ? 'https://buy.stripe.com/test_cN2aEZ1OJ4id0IEbII' : '',
        priceId: process.env.NODE_ENV === 'development' ? 'price_1PuBkiKQjsA9Vddu2jV1ClKz' : '',
        price: 20,
        duration: "/month"
    },
    {
        link: process.env.NODE_ENV === 'development' ? 'https://buy.stripe.com/test_eVadRbdxr5mh0IE9AB' : '',
        priceId: process.env.NODE_ENV === 'development' ? 'price_1PuBmKKQjsA9Vddu7EbdvB8X' : '',
        price: 200,
        duration: "/year"
    }
]