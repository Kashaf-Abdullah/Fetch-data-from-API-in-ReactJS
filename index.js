import ReactDom from "react-dom"
import './index.css'
import ReactAPIcall from './ReactAPIcall.jsx'


// ReactDom.render(<h2>Hi</h2> ,document.getElementById('root'))

 ReactDom.render(<ReactAPIcall/> ,document.getElementById('root'))

//<App/>   This is component ,We always use first capital letter of component bcz it will differentiate html tags and react component 