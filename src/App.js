import './App.css'
import {Preinterview} from './component/Preinterview'
import db from './data/db.json'

function App() {
  return (
    <>
    <div className="Faq">
      <Preinterview contentdb={ db }></Preinterview>
    </div>
    </>

  );
}

export default App;
