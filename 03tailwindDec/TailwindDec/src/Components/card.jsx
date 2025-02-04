import React from "react";

function Card(params) {
    console.log(params);
    return(
 <>

<figure className=" bg-slate-100 rounded-xl p-4 md:p-0 dark:bg-slate-800">

    <img 
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
        src="https://images.pexels.com/photos/1708539/pexels-photo-1708539.jpeg" 
        alt=" not loaded" 
        width="384" 
        height="512"
    /> 
        
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg font-medium">
                    “Tailwind CSS is 
                </p>
            </blockquote>
            
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                </div>
            </figcaption>
        </div>
</figure>
        </>
    )
    
}
export default Card;