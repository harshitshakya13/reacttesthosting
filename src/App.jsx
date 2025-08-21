import BreakFastList from './components/breakFastList.jsx';
import DinnerList from './components/dinnerList.jsx';
import MainHeading from './components/mainHeading.jsx';
import LunchList from './components/lunchList.jsx'; 

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

