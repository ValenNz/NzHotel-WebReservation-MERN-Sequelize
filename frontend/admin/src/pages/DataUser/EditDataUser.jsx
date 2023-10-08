import React from 'react'
import styles from "../../style";
import { FormEditUser } from '../../components/DataUser'
import { Footer, Sidebar } from '../../components/General'

const EditDataUser = () => {
  return (
    <div className="bg-white w-full overflow-hidden flex"> 
    <div className={`px-2 w-3/12`}>
      <div className={`${styles.boxWidth}`}>
        <Sidebar />
      </div>
    </div>

    <div className='w-full mx-5'>
    <div className={`bg-white  w-full`}>
      <div className="w-full text-xl">
        <FormEditUser />
      </div>
    </div>

    <div className={`gray-bg mt-12 ${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth} `}>
        <Footer />
      </div>
    </div>  
  </div>
  </div>
  )
}

export default EditDataUser