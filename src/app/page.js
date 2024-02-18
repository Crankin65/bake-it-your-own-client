'use client'
import React, {useState, useEffect,useRef } from 'react';
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";
import RecipeCard from "@/components/RecipeCard";
import LoadingRecipe from "@/components/LoadingRecipe";
import Footer from '../components/Footer'
import {parseRecipe, fetchRecipeJson} from "@/API Calls/passRecipeUrl";

export default function Home() {
  const [searchUrl, setSearchUrl] = useState('')
  const [recipeState, setRecipeState] = useState('')
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

      if (firstLoad.current === false) {
        console.log('step 1')
        let recipeArray = parseRecipe(searchUrl)
        console.log('step 2')
        let recipeObject = await fetchRecipeJson(recipeArray)
        setRecipeState('loading');
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


      <div className='flex flex-col items-center p-8'>
        { recipeState === 'loading' ?
          <LoadingRecipe /> : ''
        }
      </div>

      <div className='py-2'>
        { recipeState === 'success' ?
          <RecipeCard
          title = {recipeState === 'success' ? recipeObject.overview.title : 'loading'}

          overview={{
            author: recipeState === 'success' ? recipeObject.overview.author : 'loading',
            prepTime: recipeState === 'success' ? recipeObject.overview.prepTime : 'loading',
            cookTime: recipeState === 'success' ? recipeObject.overview.cookTime : 'loading',
            totalTime: recipeState === 'success' ? recipeObject.overview.totalTime : 'loading',
            servingNumber: recipeState === 'success' ? recipeObject.overview.servingNumber : 'loading',
            cuisine: recipeState === 'success' ? recipeObject.overview.cuisine : 'loading',
            imageUrl: recipeState === 'success' ? recipeObject.overview.imageUrl : 'loading'

          }}

          ingredients= {recipeState === 'success' ? recipeObject.ingredients : 'loading'}

          instructions={recipeState === 'success' ?  recipeObject.instructions : 'loading'}
          notes ={recipeState === 'success' ? recipeObject.notes : 'loading'}


        /> : ''
        }
      </div>

    <Footer />

    </div>
  )
}


