import { AllRoutes } from './routes/Allroutes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App  dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
