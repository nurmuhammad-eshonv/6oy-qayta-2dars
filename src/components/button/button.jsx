import "./button.css"

function Button(props) {
  const {title} = props
  return (
    <div> 
        <button className="btn">{title}</button>
    </div>
  )
}

export default Button