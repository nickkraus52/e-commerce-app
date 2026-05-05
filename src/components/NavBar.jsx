import { useNavigate } from 'react-router-dom'

function NavBar({ setCategory }) {
    const navigate = useNavigate()
    const buttonClass = "az-nav-btn az-text-shadow-md btn btn-sm"

    const handleNavClick = (category) => {
        navigate('/dashboard')
        setCategory(category)        
    }

    return (
        <>
            <div className="d-flex w-100 flex-wrap justify-content-center align-items-center">
                <button onClick={() => handleNavClick("Electronics")} className={buttonClass}>Electronics</button>
                <button onClick={() => handleNavClick("Clothing")} className={buttonClass}>Clothing</button>
                <button onClick={() => handleNavClick("Home")} className={buttonClass}>Home</button>
                <button onClick={() => handleNavClick("Kitchen")} className={buttonClass}>Kitchen</button>
                <button onClick={() => handleNavClick("Fitness")} className={buttonClass}>Fitness</button>
                <button onClick={() => handleNavClick("Miscellaneous")} className={buttonClass}>Miscellaneous</button>
            </div>
        </>
    )
}

export default NavBar