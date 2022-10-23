import{useState} from 'react'
import {AddCategory,GifGrid} from './components'



export const GifExpertApp = () => {

const [categories, setCategories] = useState([])
    

    const onAddCategory=(newCategory)=>{
        
        //para eliminar el hecho de repetir dos valores 
        if(categories.includes(newCategory)){
            return;
        }
        
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

           < AddCategory onNewCategory={onAddCategory} />  {/*setCategories={setCategories} */}

            {
              categories.map (category =>(

                < GifGrid 
                key={category} 
                category={category}
                /> 
                
                 ))
                 
             } 
                 
                   
                    

        </>
    )
}

/*const onAddCategory=()=>{
//to add a value to the array we have to change the state
// and to no delete the previuos values we use the 3 dots [... antes del valor ]
//to mske a copy of the previuos one and then ,to add the newone 
//in this case valorant , so we setCategories
   setCategories([...categories,'Valorant']);
  //otra forma de hacerlo seria
  //setCategories(cat=>[...cat,'Valorant']);
}
*/







  /* <button onClick={onAddCategory}>Agregar</button>*/ 
           
   /* 
               
               {categories.map(category=>{
                return <li key={category}>{category}</li> 
                 })}            
            
               
                       {
                 
                 categories.map((category)=>{
                return(
                    <div key={category}> 
                       <h3> Categories</h3>
                        <li >
                            
                            {category}
                        
                        </li> 
                           
                 
                 </div>
           
                  ) })
                }
                   
                   */
           