import React, {useId} from 'react'


//we are using forwardRef because we want to use ref in the input field
//and ref cannot be used in functional components directly
//so we use forwardRef to forward the ref to the input field

//use of forwardRef is to pass ref from parent to child component
//so that parent can directly access the child component's DOM element
//here we are passing ref to the input field so that parent can access the input field's DOM element

//we are also using useId to generate unique id for the input field
//so that we can associate the label with the input field using htmlFor attribute 

const Input = React.forwardRef( function Input({
    label,
    type="text",
    className="",
}, ref){

    const id = useId();
    return(
        <div className='w-full'>
            {
                label && <label 
                className='inline-block mb-1 pl-1 '
                htmlFor={id}
                >{label}</label> 
            } 

            <input 
                type={type}
                className={ `  px-3 py-2 rounded bg-white text-black outline-none
                focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className }`}
                ref={ref}    
            />
        </div>
    )
});

export default Input
