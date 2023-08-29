const Favoriti = ({ favoriteCities, onRemoveFavorite }) => {
    return (
      <div>
        <h3>Favoriti</h3>
        {favoriteCities.map((city, index) => (
          <div key={index}>
            {city}
            <button onClick={() => onRemoveFavorite(city)}>Ukloni</button>
          </div>
        ))}
      </div>
    );
  };

  export default Favoriti;