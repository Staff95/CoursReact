import { Routes, Route } from 'react-router-dom';
import './App.css';
// import DataFetchReducer from './components/DataFetch/DataFetchReducer';
// import ComposantC from './components/Contexte/ComposantC';
// import DataFetchAll from './components/Contexte/DataFetchAll';
// import './components/FormulaireJS/formExo.css';
// import './components/DataFetch/DataFetchTodos.css';
// import FormExo from './components/FormulaireJS/FormExo';
// import DataFetchingOne from './components/Axios/DataFetchingOne';
// import Formulaire from './components/Affichage/Formulaire';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import SuperHeroes from './components/Superheroes';
import Welcome from './components/Welcome';
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreeting from './components/UserGreeting';
// import AdminTest from "./components/AdminTest";
// import NameList from './components/React_Style/NameList';
// import Stylesheets from './components/React_Style/Stylesheets';
// import {UserProvider} from './components/Contexte/UserContext';
// import DataFetchTodos from './components/DataFetch/DataFetchTodos';

function App() {
  return (
    <div className="App">
      {/*  COMPONENTS Greet 
      <Greet name="Sofiane" age = "21 ans">Sofiane depuis le monde du travail</Greet>
      <Greet name="Titi" age = "4 ans "/>
      <Greet name="Soso" age = "27 ans "/>
        COMPONENTS SuperHeroes  
        <SuperHeroes name="Bruce" heroName = "Bruce">
        From Gotham City</SuperHeroes>
      <SuperHeroes name="Clark" heroName = "Superman "/>
      <SuperHeroes name="Diana" heroName=  "Wonder Woman"/> 

      <Welcome name="Sofiane" age = "21 ans">Sofiane depuis le monde du travail</Welcome>
      <Welcome name="Titi" age = "4 ans "/>
      <Welcome name="Soso" age = "27 ans "/>  
      
      <Message />
      <Counter value={10} />
      <FunctionClick />
      <ClassClick/>
      <UserGreeting /> 
      <AdminTest />
      <NameList />
      <Stylesheets primary={true}/> 
      <FormExo />
      <DataFetchingOne/>
      <UserProvider value="soso">
        <ComposantC />
      </UserProvider>
      <DataFetchAll /> 
      <DataFetchTodos /> 
      <DataFetchReducer />*/}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
