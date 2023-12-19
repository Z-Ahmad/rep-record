import Footer from "./components/Footer";
import "./App.css";
import BenchInput from "./components/inputs/BenchInput";
import DeadliftInput from "./components/inputs/DeadliftInput";
import SquatInput from "./components/inputs/SquatInput";
import Nav from "./components/Nav";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App bg-gray-900 min-h-screen flex flex-col justify-between p-4 items-center overflow-hidden">
        <Nav/>
        <div className="flex flex-col justify-center items-center align-middle gap-4 h-screen">
          <BenchInput />
          <DeadliftInput />
          <SquatInput />
        </div>
        <Footer/>
      </div>
    </UserContextProvider>
  );
}

export default App;
