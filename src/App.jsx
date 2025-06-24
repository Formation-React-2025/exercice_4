import React from 'react';
import Exercice1 from './components/exercices/exercice-1/Exercice1';
import Exercice2 from './components/exercices/exercice-2/Exercice2';

const App = () => (
  <main>
    <Exercice1 />

    <Exercice2
      title="Exercice 2"
    >
      <span>Hello world !</span>
    </Exercice2>

  </main>
);

export default App;
