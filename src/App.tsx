import './App.css';
import Average from './components/average/Average';
import Interval from './components/interval/Interval';
import PrizeDraw from './components/prize-draw/PrizeDraw';
import Sum from './components/sum/Sum';

const App = () => {
  return (
    <div className='App'>
      <h1>Exercise Ract-Redux (simple)</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Average />
        <Sum />
        <PrizeDraw />
      </div>
    </div>
  );
}

export default App;
