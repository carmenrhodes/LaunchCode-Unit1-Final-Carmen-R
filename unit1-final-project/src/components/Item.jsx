function Item({ item }) {
    return (
        <div className="item">
            <h3>{item.metal}</h3>
            <p>Weight: {item.weight} oz</p>
            <p>Price Paid: ${item.price}</p>
            <p>Purchase Date: {item.date}</p>
        </div>
    );
}

export default Item;