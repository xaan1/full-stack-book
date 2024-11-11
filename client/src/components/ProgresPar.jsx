

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgresPar = ({iSmediaUploading ,progress}) => {


  const [showProgress, setShowProgress] = useState(false);
 const [animationprogress, setAnimationprogress] = useState(0);


 useEffect(() => {

  if(iSmediaUploading)  {
    setShowProgress(true)
    setAnimationprogress(progress)
  } else {

    const timer = setTimeout(() => {
      setShowProgress(false)
    },1000)


    return () => clearTimeout(timer)

  }




 },[progress])

 if(!showProgress) return null


  return (
    <div

    className='w-full mt-5  bg-gray-200 rounded-full mb-5 overflow-hidden h-3 relative'
    
    >

     <motion.div

     className='bg-blue-600 h-3 rounded-full'
      initial={{width: 0}}
      animate={{width: `${animationprogress}%`}}
      transition={{duration: 0.5}}

     
     > 


     {
      progress > 100  &&  iSmediaUploading && (
        <motion.div className='absolute top-0 left-0 right-0  bottom-0   bg-blue-300 opacity-50  '
        animate={{
          x: ['0%', '100%', '0%',],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
        }}

        >

        </motion.div>
      )
     }

     </motion.div>
    



      

      
    </div>
  );
}

export default ProgresPar;
