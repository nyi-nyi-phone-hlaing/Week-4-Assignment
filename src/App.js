import ItemContextProvider from "./context/ItemContext";
import Main from "./layout/Main";

function App() {
  return (
    <div className='App'>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </div>
  );
}

export default App;
