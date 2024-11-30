import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './components/Header'
import DayList from './components/DayList';
import WordList from './components/WordList';
import EmptyPage from './components/EmptyPage';
import Word from './components/Word';
import UseFetch from './components/UseFetch2';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CreateWord from './components/CreateWord';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <DayList/>
        </Route>
        <Route exact path="/word/:day">
          <WordList/>
        </Route>
        {/* Route를 사용해 CreateWord 호출하도록 설정 */}
        <Route exact path="/create_word">
          <CreateWord/>
        </Route>
        <Route exact path="/create_day">
          <CreateDay />
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
