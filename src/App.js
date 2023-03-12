import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Common/Header/Header';
import AlumniList from './Components/AlumniList/AlumniList';
import JobList from './Components/JobList/JobList';


function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      {/* <AlumniList></AlumniList> */}
      <JobList></JobList>
    </div>
  );
}

export default App;
