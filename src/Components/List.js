import React from 'react';

const List = ({ champions }) => {
   return (
      <>
         {champions.map((champion) => {
            const { id, name, mastery, splashart } = champion;
            return (
               <article key={id} className='person'>
                  <img src={splashart} alt={name}></img>
                  <div>
                     <h4>{name}</h4>
                     <p>Mastery: {mastery}</p>
                  </div>
               </article>
            );
         })}
      </>
   );
};

export default List;
