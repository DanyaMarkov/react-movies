import './App.css';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useTheme } from './hooks/use-theme'


function App() {

  const { theme, setTheme } = useTheme();

  return (
    <div className="App">
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </div>
  );
}

export default App;
