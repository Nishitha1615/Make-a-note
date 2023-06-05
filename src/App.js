import Home from "./Components/Home";
import DataProvider from "./Context/Provider";

function App() {
  return (
    <DataProvider >
      <Home/>
    </DataProvider>
  );
}

export default App;
