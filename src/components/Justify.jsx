import '../App.css';

export default function Justify({ justify }) {
  return (
    <div className={`w-full flex ${justify}`}>
    <div className="bg-white m-2">
        <p className="p-4 mt-1 font-bold text-xl">
        Bloco 1
        </p>
    </div>
    <div className="bg-blue-400 m-2">
        <p className="p-4 m-1 font-bold text-xl">
        Bloco 2
        </p>
    </div>
    <div className="bg-yellow-200 m-2">
        <p className="p-4 m-1 font-bold text-xl">
        Bloco 3
        </p>
    </div>
    </div>
  );
}