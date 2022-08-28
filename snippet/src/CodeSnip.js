import React from 'react'

const CodeSnippet = ({name,code}) => {
  

    return (<>
                 <div className='container-snip'>
                 <div>{name}</div>
                 <div className='container-snip1'>
                  <div>{code}</div>
                 </div>
                 
                 </div>
    </>

  )
}

export default CodeSnippet