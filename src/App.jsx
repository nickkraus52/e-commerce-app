import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemsListing from './components/ItemsListing'
import { useState, useEffect } from 'react'
import Filters from './components/Filters'
import SearchBar from './components/SearchBar'
import './App.css'
import './components/components.css'
import ShoppingCart from './components/ShoppingCart.jsx'

function App() {
  const URL = "http://localhost:5000/products"
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

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
          let words = search.split(" ")
          console.log("search")
          words.forEach(word => setFilteredItems(updated.filter(i => checkForKeyword(word.toUpperCase(), i))))
        } else{
          console.log("h")
          updated = updated.filter(i => checkForKeyword(search.toUpperCase(), i))
        } 
    } 

    setFilteredItems(updated)
  }, [category, search]) 

  function checkForKeyword(keyword, i){
    let description = i.description
    let name = i.name
    let tags = i.tags

    if (description.toUpperCase().includes(keyword)){
      return true
    } if (name.toUpperCase().includes(keyword)){
      return true
    } 
    tags.forEach(tag => {
      if (tag.toUpperCase().includes(keyword)){
        return true
      }
    })

    return false
  }

  return (
    <div className="az-page">
      <BrowserRouter>
        <header className="az-header sticky-top">
          <SearchBar setSearch={setSearch} search={search}/>
          <NavBar setCategory={setCategory} />
        </header>
        <main className="az-main">
          <Routes>
            <Route path="/dashboard" element={
              <>
                <Filters category={category} search={search} setCategory={setCategory} setSearch={setSearch} />
                <ItemsListing items={filteredItems} />
              </>
            } /> 
            <Route path="/" element={
              <>
                <Filters category={category} search={search} setCategory={setCategory} setSearch={setSearch} />
                <ItemsListing items={filteredItems} />
              </>
            } /> 
            <Route path="/cart" element={<ShoppingCart items={items} />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
