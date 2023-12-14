import {ReactComponent as Deadlift} from './icons/deadlift-icon.svg'
import {ReactComponent as Squat} from './icons/squat-icon.svg'
import Footer from './components/Footer';
import './App.css';
import BenchInput from './components/BenchInput';

function App() {
  return (
    <div className="App bg-gray-900 h-screen flex flex-col justify-between p-4">
      <div className='flex '>

      <BenchInput/>
      <Deadlift fill="white" style={{ height: 200, width: 200 }} />
      <Squat fill="white" style={{ height: 200, width: 200 }} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
