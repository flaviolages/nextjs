import { useState } from "react";
import StripeContainer from "../components/StripeContainer";


export default function Home() {
  const [showItem, setShowItem] = useState(false);


  return (
    <div>
        

        {showItem ? <StripeContainer/> 
        : 
          <div>
          <h1>Camiseta</h1>
          <img className="App-logo" src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619286371/jetcompanybr/152500697_471461290903439_691640409675796578_n_z8f6xb.jpg"></img>
          <div>
            R$333
          </div>
          <div>
            <button onClick={() => setShowItem(true)}>Camiseta  </button>
          </div>
          </div>
        
        
        }

    </div>
  )
}
