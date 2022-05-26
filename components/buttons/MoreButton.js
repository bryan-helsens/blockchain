import React from 'react'
import { BsChevronRight } from 'react-icons/bs';

const styles = {
    button: `text-[#6188FF] flex items-center cursor-pointer whitespace-nowrap justify-between`
}

const MoreButton = () => {
  return (
    <div className={styles.button}>More 
        <BsChevronRight />
    </div>
  )
}

export default MoreButton