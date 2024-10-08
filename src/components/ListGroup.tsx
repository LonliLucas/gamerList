function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No Items Found</p>}
        <ul className="list-group">
          {items.map(item => (
          <li key={item} className="list-group-item">{item}</li>
          ))}
        </ul>
    </>
  );
}

export default ListGroup;
