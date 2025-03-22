import { AllRoutes } from './routes/Allroutes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App  dark:bg-darkbg flex flex-col min-h-screen">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
