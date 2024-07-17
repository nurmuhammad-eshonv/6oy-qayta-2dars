import Card from "./components/card/card"
import data from "./assets/data.json"
import "./App.css"
function App() {
  console.log(data.l)

  return (
    <div className="wr">
    {
     data.length && data.map((el, index) => {
        return <Card key={index} data = {el}/>
       })
    }
      
    </div>
        
  )
}

export default App