
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detailview from './components/details/DetailsView';

import DataProvider from './context/DataProvider';

import {Box} from'@mui/material';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style ={{marginTop: 85}}>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/product/:id' element={<Detailview/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
