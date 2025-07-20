import Item from './Item';

function StackList({ stack }) {
    return (
        <div>
            <h2>My Stack</h2>
            {stack.length === 0 ? (
                <p>Your stack is currently empty.</p>
            ) : (
                stack.map((item) => <Item key={item.id} item={item} />)
            )}
        </div>
    );
}

export default StackList;
