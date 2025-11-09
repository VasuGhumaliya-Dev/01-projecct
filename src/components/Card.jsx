import React from 'react'
import { Bookmark } from 'lucide-react'

function Card(props) {
    console.log(props.card_data)
  return (
    <div className="card">
        <div>
            <div className="top">
                <img src={props.card_data.brandLogo} />
                <button>Save <Bookmark size={15}/></button>
            </div>
            <div className="center">
                <h3>{props.card_data. companyName}<span>{props.card_data.posted}</span></h3>
                <h2>{props.card_data.post}</h2>
                <div className="tag">
                    <h4>{props.card_data.tag1}</h4>
                    <h4>{props.card_data.tag2}</h4>
                </div>
            </div>
        </div>
        <div className="bottom">
                <div>
                    <h3>{props.card_data.pay}</h3>
                    <p>{props.card_data.location}</p>
                </div>
                <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
