import "./App.css";
import Title from "./components/Title";
import TitleClass from "./components/TitleClass";

function App() {
  // const myVar = "this is my var";
  // const add = (num1, num2) => num1 + num2;

  return (
    <>
      {/* <div>ini div 1</div> */}
      {/* <div className="div2">{add(1, 3)}</div> */}
      <Title title="Hahaha" />
      <TitleClass title="Ini title untuk class component" />
    </>
  );
}

export default App;
