import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"



const OurServicesCrad = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const emptyForm = {
        id : null, 
        icon : "",
        title : "",
        description : "",
        contentBtn : "Learn More"
    }
    const [cards,setCard] = useState([]);
    const [formData, setFormData] = useState(emptyForm);
    
    const localCards = () => {
        try{
            return
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        }
        catch{
            return[];
        }
    }

    return (
        <div>
        
        </div>
    )
}

export default OurServicesCrad
