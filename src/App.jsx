import { Routes, BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemsListing from './components/ItemsListing'
import { useState, useEffect } from 'react'
import Filters from './components/Filters'

function App() {
  const URL = "http://localhost:5000/products"
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setItems(data))})

  
  
  return (
    <>
      <NavBar setCategory={setCategory} />
      <Filters category={category} search={search} setCategory={setCategory} setSearch={setSearch} />

    </>
  )
}

export default App
