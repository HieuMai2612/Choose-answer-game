import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import CreateGame from "./component/CreateGame/createGame";
import GamePlay from "./component/GamePlay/gamePlay";
import Result from "./component/Result/result";
import StartGame from "./component/StartGame/startGame";
import Winner from "./component/Winner/winner";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<StartGame />} />
            <Route path="/create-game" element={<CreateGame />} />
            <Route path="/game-screen" element={<GamePlay />} />
            <Route path="/result" element={<Result />} />
            <Route path="/winner" element={<Winner />} />
          </Routes>

        </Router>

      </header>
    </div>
  );
}

export default App;
