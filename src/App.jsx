import Card from "./components/card/card"
import data from "./assets/data.json"

function App() {
  console.log(data.l)

  return (
    <div>
      <h2>fa</h2>
    {
     data.length && data.map((el, index) => {
        return <Card key={index} data = {el}/>
       })
    }
      
    </div>
        
  )
}

export default App