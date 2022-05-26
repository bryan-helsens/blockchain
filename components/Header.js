import React from 'react'
import { ConnectButton } from 'web3uikit'

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    navLeft: `flex justify-center items-center gap-3`,
    navItem: `relative mr-1 cursor-pointer font-bold`,
    navLink: `text-white text-lg flex mx-[10px] hover:text-blue-500 duration-300`,
    connect: `flex items-center`
}

const Header = () => {
  return (
    <div className={styles.header}>

        <div className={styles.headerWrapper}>
            <div className={styles.navLeft}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Coins</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Trading</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Portfolio</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Chatroom</div>
                </div>
            </div>

            <div className={styles.connect}>
                <ConnectButton />
            </div>
        </div>
    </div>
  )
}

export default Header