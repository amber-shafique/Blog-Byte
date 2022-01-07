import Header from './Header'

import { Fragment, default as React } from 'react'
const Layout=({children})=>{

    return (
        <Fragment>
            <Header/>
         
                {children}
            <p>Footer</p>
        </Fragment>
    ) 
}
export default Layout; 