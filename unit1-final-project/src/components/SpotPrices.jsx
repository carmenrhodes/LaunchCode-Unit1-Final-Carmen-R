import "./SpotPrices.css";

function SpotPrices() {
  const dummyPrices = {
    gold: 3347.25,
    silver: 38.05,
    platinum: 1419.60,
    palladium: 1240.00,
    Rhodium: 5675.00
  };

  return (
    <div className="spot-prices">
      <h3>Live Spot Prices</h3>
      <div className="price-cards">
        {Object.entries(dummyPrices).map(([metal, price]) => (
          <div className="price-card" key={metal}>
            <h4>{metal.charAt(0).toUpperCase() + metal.slice(1)}</h4>
            <p>${price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpotPrices;