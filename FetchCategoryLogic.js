import  { useEffect, useState } from 'react'

 export const App = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories").then(res => res.json()).then(data => setCategories(data))
  }, [])

  function selectCategory(selectedCategory) {
    
   const selected =  categories.filter(category => category.slug === selectedCategory)

   fetch(selected[0].url).then(res => res.json()).then(data => console.log(data))
  }

  console.log(selectCategory("beauty")) }







