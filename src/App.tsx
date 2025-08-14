import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import "../src/assets/styles/layout.scss";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </main>
      <Footer />
    </div>
  );
};

export default App;
