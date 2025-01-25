import { AllRoutes } from './routes/Allroutes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App  dark:border-gray-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
