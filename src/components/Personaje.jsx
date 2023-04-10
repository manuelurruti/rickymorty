import React from 'react'

export const Personaje = (
  { e }
) => {
  return (
    <article className='personaje'>
      <div className="personaje-header">
        <div className="estado">
          <span className={e.status}></span>
          <h4 className='whitecolor'>{e.status}</h4>
        </div>
      </div>
      <div className="personaje-body">
        <figure>
          <img src={e.image} alt="asdas" />
        </figure>
        <h2 className='whitecolor'>{e.name}</h2>
        <p className={e.status}>{e.species} <span>-</span> {e.gender}</p>
      </div>
    </article>
  )
}
