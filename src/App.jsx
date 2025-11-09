import React from 'react'
import Card from './components/Card'
import cdata from './assets/Card_data.jsx'

function App() {
  return (
    <div className='parent'>
      {

        cdata.map(function(elem,index){
          return(
            <div key={index}>
              <Card card_data={elem}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
