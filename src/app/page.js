'use client'
import React, {useState, useEffect,useRef } from 'react';
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";
import RecipeCard from "@/components/RecipeCard";
import Footer from '../components/Footer'
import {parseRecipe, fetchRecipeJson} from "@/API Calls/passRecipeUrl";

export default function Home() {
  const [searchUrl, setSearchUrl] = useState('')
  const [recipeState, setRecipeState] = useState('loading')
  const [recipeObject, setRecipeObject] = useState({})
  const firstLoad = useRef(true)

  const updateSearchUrl = (url) => {
    setSearchUrl(url)
  }

  function updateRefLoad() {
    firstLoad.current = false
    console.log('firstload update')
    console.log(firstLoad.current)
  }

  useEffect(() => {
    (async () => {
      setRecipeState('loading');

      if (firstLoad.current === false) {
        console.log('step 1')
        let recipeArray = parseRecipe(searchUrl)
        console.log('step 2')
        let recipeObject = await fetchRecipeJson(recipeArray)
        console.log(recipeObject)
        if (recipeObject) {
          setRecipeObject(recipeObject)
          setRecipeState('success')
        } else {
          setRecipeState('error')
        }
      }

    })();
  }, [searchUrl])


  return (
    <div className=''>


      <div className=''>
        <Navbar2
          updateSearchUrl = {updateSearchUrl}
          updateRefLoad = {updateRefLoad}
        />
      </div>

      <div className='py-2'>
        { recipeState === 'loading' ? '' :
          <RecipeCard
          title = {recipeState === 'loading' ? 'loading' : recipeObject.overview.title}

          overview={{
            author: recipeState === 'loading' ? 'loading' : recipeObject.overview.author,
            prepTime: recipeState === 'loading' ? 'loading' : recipeObject.overview.prepTime,
            cookTime: recipeState === 'loading' ? 'loading' : recipeObject.overview.cookTime,
            totalTime: recipeState === 'loading' ? 'loading' : recipeObject.overview.totalTime,
            servingNumber: recipeState === 'loading' ? 'loading' : recipeObject.overview.servingNumber,
            cuisine: recipeState === 'loading' ? 'loading' : recipeObject.overview.cuisine,
            imageUrl: recipeState === 'loading' ? 'loading' : recipeObject.overview.imageUrl

          }}

          ingredients= {recipeState === 'loading' ? 'loading' : recipeObject.ingredients}

          instructions={recipeState === 'loading' ? 'loading' : recipeObject.instructions}

          notes ={recipeState === 'loading' ? 'loading' : recipeObject.notes}


        />
        }
      </div>

    <Footer />

    </div>
  )
}


