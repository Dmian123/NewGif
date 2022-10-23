//archivo js porque es puro codigo de java script
//acuweather omdb
//url +apikey  http://www.omdbapi.com/?i=tt3896198&apikey=e71ac819



 export const getGifs=async(category)=>{

   const url=`https://api.giphy.com/v1/gifs/search?api_key=y0bmID8pIenW8pf2YRVIB3yazRCZqupw&q=${category}&limit=20`

    const resp=await fetch(url);
    
     const {data}=await resp.json();
    
    //console.log(data)
    
      const gifs=data.map(img=>({
    
          id:img.id,
          title:img.title,
          url:img.images.downsized_medium.url
    
      }))
    
     console.log(gifs)
      return gifs;
    
    }