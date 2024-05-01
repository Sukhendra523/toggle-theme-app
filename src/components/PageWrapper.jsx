import React  from 'react'

const PageWrapper = ({pagename,children}) => {
    
  return (
    <div className='page'>
        <h1>{pagename}</h1>
        <div>Welcome To <b>{pagename}</b> page </div>
        {children}
    </div>
  )
}

export default PageWrapper