
import React from 'react';

import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
//import {getGifs} from '../Helpers/getGifs';

////import{useState, useEffect} from 'react';


export const GifGrid = ({category}) => {

const {images,isLoading }=useFetchGifs(category);

console.log({images,isLoading});




   // const apiKey='y0bmID8pIenW8pf2YRVIB3yazRCZqupw';
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);//esto seria una promesa
    //limit =20 its to limit the amount of images
    //url obtasin and usverified on postman after test api with key and a value

   //const [counter, setCounter]=useState(10);
/*


*/

    return (
                 
                <>
                 
               <h3> {category}</h3>
                 
                      {
        
                      isLoading && (<h2>Loading....</h2>)
        
        
                        }
                  {/*
                     isLoading
                     ?(<h2>Loading...</h2>)
                     :null
                     
                   */ }
                 
                  <div className="card-grid"> 
                
                 {
                      images.map((image)=>(

                         <GifItem
                            key={image.id}
                                { ...image}  // to acces all properties of images id title etc 
                            
                          /*
                            other way will be 
                             key={image.id}
                             title={image.title}
                              url={image.url}
                          */

                          
                          />
                
                 
                      ) )
                 
             } 
                 
                 </div>       
              
              

                 </>
               )
                
    };

// <p>{counter}</p>
//<button onClick={()=>setCounter(counter+1)}> + </button>


    // sin destructurar quedaria
                    /*
                         images.map (image=>( 
                           <li key={image.id}>{image.title}</li>
                        }

                           destrcuturado
                            images.map({id,title})=>{
                         <li key={id}>{title}</li>
                            })
                    */          