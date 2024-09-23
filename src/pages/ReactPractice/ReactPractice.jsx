import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import KeepNote from './components/KeepNote';
import notes from './components/notesContent';

function createNotes(noteItem)
{
  return < Note 
  key={noteItem.key}
  Title={noteItem.Title}
  Content={noteItem.Content}
/>
}

const ReactPractice = () => {
  return (
    <div className='flex flex-col justify-between bg-gray-100'>
        <Header  />
        <KeepNote />
        {notes.map(createNotes)}
        <Footer />
    
    </div>
  );
};

export default ReactPractice;
