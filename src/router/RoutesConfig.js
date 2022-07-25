export const routesKeys = {
    cart: 'cart',
    catalog: 'catalog',
    main: 'main',
    delivery: 'delivery',
    product: 'product',
    order: 'order'
}

export const routesConfig = [
    {
        key: 'cart',
        path: '/cart',
        title: 'Cart',
    },
    {
        key: 'catalog',
        path: '/catalog',
        title: 'Catalog',
    },
    {
        key: 'main',
        path: '/',
        title: 'Main',
    },
    {
        key: 'delivery',
        path: '/delivery',
        title: 'Delivery',
    },
    {
        key: 'product',
        path: '/product/:id',
        title: '',
    },
    {
        key: 'order',
        path: '/order',
        title: 'Order'
    }
]
