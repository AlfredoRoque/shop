export interface Order{
    id: number;
    name: string;
    date: Date;
    shippingAddress: string;
    city: string;
    pickup: Boolean;
}

export interface Details{
    productId: number;
    productName: string;
    quantity: number;
}

export interface DetailsOrder{
    details: Details[];
    orderId: number;
}