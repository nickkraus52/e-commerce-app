import { Routes, BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemsListing from './components/ItemsListing'
import { useState, useEffect } from 'react'
import Filters from './components/Filters'
import SearchBar from './components/SearchBar'

function App() {
  const URL = "http://localhost:5000/products"
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      setItems(data) 
      setFilteredItems(data)
    })}, [])

  useEffect(() => {
    let updated = items
    
    if (category !== ""){
      updated = updated.filter(item => item.category.toLowerCase() == category.toLowerCase())
    } if (search !== "" && search !== undefined){
        if (search.split(" ").length > 1){
          const words = search.split(" ")
          words.forEach(word => setFilteredItems(filteredItems.filter(item => checkForKeyword(word, item))))
        } else{
          updated = updated.filter(item => checkForKeyword(search))
        }
    } 

    setFilteredItems(updated)
  }, [category, search])

  function checkForKeyword(keyword, item){
    if (item.description.contains(keyword)){
      return true
    } if (item.name.contains(keyword)){
      return true
    }
  } 

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#7C7C7C]">
      <header className="z-10 w-full shrink-0 shadow-md shadow-black/20">
        <SearchBar setSearch={setSearch} search={search}/>
        <NavBar setCategory={setCategory} />
      </header>
      <main className="min-h-0 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#52DEE5] scrollbar-track-[#7C7C7C] hover:scrollbar-thumb-[#92DCE5]">
        <Filters category={category} search={search} setCategory={setCategory} setSearch={setSearch} />
        <ItemsListing items={filteredItems} setCart={setCart} cart={cart} />
      </main>
    </div>
  )
}

export default App
