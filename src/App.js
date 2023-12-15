import { ReactComponent as Deadlift } from "./icons/deadlift-icon.svg";
import { ReactComponent as Squat } from "./icons/squat-icon.svg";
import Footer from "./components/Footer";
import "./App.css";
import BenchInput from "./components/inputs/BenchInput";
import DeadliftInput from "./components/inputs/DeadliftInput";
import SquatInput from "./components/inputs/SquatInput";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen flex flex-col justify-between p-4 items-center overflow-hidden">
      <Nav/>
      <div className="flex flex-col justify-center items-center align-middle gap-4 h-screen mb-[-6.5rem] mt-[-4rem]">
        <BenchInput />
        <DeadliftInput />
        <SquatInput />
      </div>
      <Footer className=""/>
    </div>
  );
}

export default App;
