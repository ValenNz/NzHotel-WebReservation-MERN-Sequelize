import React from 'react'
import styles from "../../style";
import { Sidebar, Footer } from "../../components/General";
import { FormEditStatus } from '../../components/DataPemesanan'

const EditDataPemesanan = () => {
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
            <FormEditStatus />
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

export default EditDataPemesanan