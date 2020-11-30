
const { default: Books } = require("./Books/Books");
const { default: Header } = require("./Header/Header");

function App() {
  return <div>
    <Header></Header>
    <Books></Books>
  </div>;
}

export default App;
