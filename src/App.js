import React, { useState } from 'react';
import data from './Components/data';
import List from './Components/List';

function App() {
   const [champions, setChampions] = useState(data);

   return (
      <main>
         <section className='container'>
            <h3>{champions.length} champions I play</h3>
            <List champions={champions} />
         </section>
      </main>
   );
}

export default App;
