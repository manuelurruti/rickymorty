import Logo from './assets/logo.png'
import { Filtrar } from "./components/Filtrar"
import { useEffect, useState } from "react";
import { Personajes } from './components/Personajes'

function App() {
	const [loading, setLoading] = useState(true)
	const [personajes, setPersonajes] = useState([])
	const [texto, setTexto] = useState('')
	useEffect(() => {
		let fetchPersonajes = async () => {
			const res = await fetch("https://rickandmortyapi.com/api/character")
			const data = await res.json()
			console.log(data);
			setPersonajes(data.results)
			setLoading(false)
		}
		fetchPersonajes()
	}, [])

	const personajesFiltrados = personajes.filter(e => e.name.toLowerCase().includes(texto.toLocaleLowerCase()))

	return (
		<div className='container'>
			<figure className='logo'>
				<img src={Logo} alt='Logo de Rick & Morty' />
			</figure>
			<Filtrar texto={texto} setTexto={setTexto} />{
				loading ? <div>Cargando</div> : <Personajes texto={texto} personajes={personajesFiltrados} />}
		</div>
	)
}


export default App
