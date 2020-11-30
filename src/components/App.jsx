
const { default: MainPage } = require("./MainPage/MainPage");
const { default: Header } = require("./Header/Header");

function App() {
  return <div>
    <Header></Header>
    <MainPage></MainPage>
  </div>;
}

export default App;
