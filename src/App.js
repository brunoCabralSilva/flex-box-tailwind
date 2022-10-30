import './App.css';
import Justify from './components/Justify';

function App() {
  return (
    <div>
    <div className="bg-black w-full h-screen p-2 flex flex-col items-center ">
      <Justify justify="justify-center" />
      <Justify justify="justify-start" />
      <Justify justify="justify-end" />
      <Justify justify="justify-between" />
      <Justify justify="justify-around" />
      <Justify justify="justify-evenly" />
    </div>
  </div>
  );
}

export default App;
