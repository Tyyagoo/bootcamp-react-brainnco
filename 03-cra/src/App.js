import "./App.css";

function Title({ name, children }) {
  return (
    <div>
      <h1>
        Hello, <span className={name.toLowerCase()}>{name}!</span>
      </h1>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title name="React">It's me!</Title>
      <Title name="Angular">Come to the red side of the force!</Title>
      <Title name="Vue">
        <span style={{ border: "1px solid green", borderRadius: "50%" }}>
          🌲
        </span>
      </Title>
    </div>
  );
}

export default App;
