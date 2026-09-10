export interface Order {
    OrderId: string
    UserId: string
    ProductId: string
    DateCreated: Date
}
export interface OrderListReq {
    correlationId: string
    userId: string
}
export interface OrderListRes {
    correlationId: string
    orders: Order[]
}