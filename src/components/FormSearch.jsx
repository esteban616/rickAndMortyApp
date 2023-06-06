/* eslint-disable react/prop-types */
import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"
import "./styles/formSearch.css"

const FormSearch = ({setIdLocation}) => {
     const idLocationValue=useRef()
     const handleSubmit = e=>{
        e.preventDefault()
        if (idLocationValue.current.value.trim()==="") {
            setIdLocation(getRandomNumber(126)) 
        }else{
            setIdLocation(idLocationValue.current.value.trim())
        }
        
        
     }
    return (
    <form className="fromSearch" onSubmit={handleSubmit}>
        <input className="formInput" placeholder="Enter id location" type="text" ref={idLocationValue} />
        <button className="formBtn">Search</button>
    </form>
  )
}

export default FormSearch