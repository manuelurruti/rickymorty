import React from "react"
import { Personaje } from "./Personaje"

export const Personajes = ({ personajes, texto }) => {
  if
    (personajes.length === 0) return <div> No hay personajes con: {texto} </div>

  return (
    <section className="lista-personajes">
      {
        personajes.map(event => <Personaje key={event.id} e={event} />)
      }



    </section>

  )
}