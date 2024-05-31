import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Aside from './components/Aside';
import MainContent from './components/MainContent';
import './index.css';

const App = () => {
  const [modules, setModules] = useState([]);
  const [selectModule, setSelectModule] = useState(null);
  const [action, setAction] = useState(1);
  const [cap, setCap] = useState(null);

  const changeAction = ((action) => {
    setAction(action)
  })

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/curso/');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchModules();
  }, []);

  const GetOneModule = async (moduleId, action, cap) => {
    console.log('ID: ' + moduleId, '  action:' + action, '   CAP:' + cap);
    try {
      const response = await axios.get(`http://localhost:3000/api/curso/${moduleId}`);
      setSelectModule(response.data);
      changeAction(action)
      setCap(cap)
      // console.log(response.data);

    } catch (error) {
      console.error('Error fetching module:', error);
    }
  };


  return (
    <div className="main-container">
      <Aside
        modules={modules}
        GetOneModule={GetOneModule}
        changeAction={changeAction}
      />

      <MainContent
        // changeAction={changeAction}
        GetOneModule={GetOneModule}
        selectModule={selectModule}
        modules={modules}
        action={action}
        changeAction={changeAction}
        cap={cap}
      />
    </div>
  );
};

export default App;
