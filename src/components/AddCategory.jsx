
import{useState} from 'react';



export const AddCategory = ({onNewCategory}) => {

    
 const [inputValue, setInputValue] = useState('');

 //const onInputChange = (event) =>{ // si destrcuturo target para no poner event

 const onInputChange = ({ target }) =>{
  //console.log(event.target.value);
// setInputValue(event.target.value);
   setInputValue(target.value);


}

  const onSubmit=(event)=>{
     event.preventDefault();
      //console.log(inputValue);

//para veitar que cuando press enter we get on the list a white space 
//we can do this 


if(inputValue.trim().length<=1) {
    return;
}
  //setCategories((categories)=>[inputValue, ...categories]);
  setInputValue('');
  onNewCategory(inputValue.trim());
    
  
  }

  
    return (
      <form onSubmit={onSubmit}> {/*tambien puede ser asi (event)=>onSubmit(event) */}

      <input
        type="text"
        placeholder=" Buscar gifs "
        value={inputValue}
        //onChange={(event)=>onInputChange(event)} o se puede poner 
        onChange={onInputChange}
      />
     </form>
    )
}
