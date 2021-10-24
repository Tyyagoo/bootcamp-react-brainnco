import "./App.css";

const frameworks = ["Vue", "Angular", "React"];
const message = {
  react: () => "It's me!",
  angular: () => "Come to the red side of the force!",
  vue: () => (
    <span style={{ border: "1px solid green", borderRadius: "50%" }}>🌲</span>
  ),
};

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
      {frameworks.map((fw) => (
        <Title key={fw} name={fw}>
          {message[fw.toLowerCase()]()}
        </Title>
      ))}
    </div>
  );
}

export default App;
