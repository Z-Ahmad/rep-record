import { ReactComponent as Deadlift } from "./icons/deadlift-icon.svg";
import { ReactComponent as Squat } from "./icons/squat-icon.svg";
import Footer from "./components/Footer";
import "./App.css";
import BenchInput from "./components/BenchInput";
import DeadliftInput from "./components/DeadliftInput";
import SquatInput from "./components/SquatInput";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen flex flex-col justify-between p-4 items-center ">
      <div className="flex flex-col md:flex-row justify-center items-center align-middle gap-4 h-screen">
        <BenchInput />
        <DeadliftInput />
        <SquatInput />
      </div>
      <Footer className=""/>
    </div>
  );
}

export default App;