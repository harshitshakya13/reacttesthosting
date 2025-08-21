import BreakFastList from './components/BreakFastList.jsx';
import DinnerList from './components/DinnerList.jsx';
import MainHeading from './components/MainHeading.jsx';
import LunchList from './components/LunchList.jsx'; 

function App() {


  return (
    <div className="App">
      <MainHeading />
      <BreakFastList />
      <LunchList />
      <DinnerList />
    </div>
  );
}
export default App;

