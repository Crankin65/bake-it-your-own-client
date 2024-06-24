# bake-it-your-own-client

I created this front-end to display data received from my Express-API-Server. This client pulls recipe information (title, ingredients, steps for the recipe, and information about dietary information about cuisine). A picture is also displayed of the food as well. 

A user is able to input the url of two recipe websites (CookiesandKate or Cupcakesandkalechips) to ping the server to scrape the website for key recipe information. If the recipe has been scraped before, we ping the a MongoDB database for quick retrieval.

# Tech Stack
This uses React and NextJS as the framework. The CSS is done with TailwindCSS, uses DaisyUI components, and is hosted by Vercel. 
