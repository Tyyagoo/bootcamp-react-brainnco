import "./App.css";

function Title({ name }) {
  return (
    <>
      <h1>Hello</h1>
      <h2 className={name.toLowerCase()}>{name}!</h2>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Title name="React" />
      <Title name="Angular" />
      <Title name="Vue" />
    </div>
  );
}

export default App;
