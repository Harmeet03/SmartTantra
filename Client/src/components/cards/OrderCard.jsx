import ProductCard from "./ProductCard"

const OrderCard = ({order}) => {
    return(
        <div className="mt-4 border-b pb-4 max-w-7xl m-auto">
            <div className="flex items-center justify-between px-4">
                <div>
                    <p className="text-xs sm:text-lg"> Order: #<span className="text-yellow-500">{order.orderId.slice(-14)} </span> </p>
                    <p className="text-gray-500 text-xs sm:text-lg"> {new Date(order.createdAt).toLocaleString()}  </p>
                </div>

                <div className={`px-4 py-1 text-lg sm:px-8 sm:py-2 sm:text-xl rounded-full ${
                    order.status === 'paid'
                        ? 'bg-green-500/40 text-green-500' : 
                    order.status === 'pending'
                        ? 'bg-yellow-500/40 text-yellow-500'
                        : 'bg-red-500/40 text-red-500'
                }`}>
                    <span> {order.status.toUpperCase()} </span>
                </div>
            </div>

            <div>
                {
                    order.items.map(item => (
                        <div>
                            <ProductCard key={item._id} product={item} quantity={item.quantity}/>
                            
                            {
                                order.status === 'paid' && (
                                    <p className="text-center"> 
                                        Bought <span className="text-yellow-500"> {item.quantity} item{item.quantity > 1 ? 's' : ''} </span>
                                        for <span className="text-blue-500 text-2xl font-medium"> ₹{order.amountPaid} </span>  
                                    </p>
                                )
                            }
                            
                        </div>
                    ))
                }
            </div>

            <div>
            </div>
        </div>
    )
}

export default OrderCard