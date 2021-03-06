import Routes from "./routes";

import { Provider } from "react-redux";
import store from "./store";

import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
