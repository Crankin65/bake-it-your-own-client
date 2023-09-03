'use client'
import React, {useState, useEffect,useRef } from 'react';
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";
import RecipeCard from "@/components/RecipeCard";
import {parseRecipe, passRecipeUrl} from "@/API Calls/passRecipeUrl";

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
    console.log(firstLoad.current)
  }


    useEffect(() => {
      setRecipeState('loading');
      if (firstLoad.current === false) {
        console.log('step 1')
        parseRecipe(searchUrl)
          .then((res) => {
            console.log('step 2')
            passRecipeUrl(res)
            })
              .then((res) => {
                console.log('step 3')
                setRecipeObject(res)
                setRecipeState('success')
              })


          .catch((err) => {
            console.log('Error:', err)
            setRecipeState('error')
          })
      }

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
            // diet: diet === 'loading' ? 'loading' : recipeObject.overview.diet,

          }}

          ingredients= {recipeState === 'loading' ? 'loading' : recipeObject.ingredients}

          instructions={recipeState === 'loading' ? 'loading' : recipeObject.instructions}

          notes ={recipeState === 'loading' ? 'loading' : recipeObject.notes}


        />
        }
      </div>



    </div>
  )
}


