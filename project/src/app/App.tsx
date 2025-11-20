import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Home } from "../pages/home";
import { ProductTour } from "../shared/ui/productTour/ProductTour";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </div>

      <ProductTour />
    </>
  );
}

export default App;
