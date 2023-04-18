import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
    const renderFiles = () => {

      const containers = []; for (let i = 0; i < 30; i++) {

      const file = files[i]; containers.push(

      <div

      key={i}

      className={file-container

      hidden-${i + 1}'}

      onClick={() => console.log('File ${i + 1}

      clicked')}
      >

      {file? <span>{file.name}

      <\span> : null}
      </div>
      );
      }

      return (

      <div

      className="outer-container" onMouseMove={handleMouseEnter} onMouseLe ave={handleMouseLeave}

      > {containers} <\\\\\\\/div>

      );

      };

      We've added an `onClick` property to each file container to log a message when the user clicks on it.

      Finally, we need to adjust the container positions to accommodate the circular border radius. We'll update the handleMouseEnter and `handleMouseLeave` functions as follows:

      jsx

      const handleMouseEnter

      (event) => {

      const containers =

      Array.from(document.querySelec torAll('.file-container'));

      const target = event.target.clos

      est('.file-container');

      if (target) {

      containers.splice(containers.indexOf(target), 1); target.classList.add('visible'); containers.forEach((container,

      index) =>

      container.classList.add('hidden-$ {index + 1}')

      ); }

      };

      const handleMouseLeave = () => { const containers =

      Array.from(document.querySelec

      torAll('.file-container'));

      const visibleContainer = docum

      ent.querySelector('.visible');

      if (visibleContainer) {

      visibleContainer.classList.rem ove('visible');

      containers.forEach((container)

      =>

      container.classList.remove('hidden-1', 'hidden-2', 'hidden-3',

      'hidden-4', 'hidden-5', 
      'hidden-6', 'hidden-7', 'hidden-8', 'hidden-9',

      'hidden-10', 'hidden-11',

      'hidden-12', 'hidden-13',

      'hidden-14', 'hidden-15',

      'hidden-16', 'hidden-17',

      'hidden-18', 'hidden-19',

      'hidden-20', 'hidden-21',

      'hidden-22',

      'hidden-23',

      'hidden-24', 'hidden-25',

      'hidden-26', 'hidden-27',

      'hidden-28', 'hidden-29',

      'hidden-30')

      );
</div>
      }
    }