import "../index.css"

function NavBar() {

    const buttonClass = "text-[#52DEE5] border-2 rounded-sm border-[#92DCE5] bg-[#383D3B] py-1 hover:bg-[#7C7C7C] hover:border-[#52DEE5] mx-1"

    return (
        <>
            <div className="flex justify-center items-center bg-[#EEE5E9] py-1">
                <button className={buttonClass}>Electronics</button>
                <button className={buttonClass}>Clothing</button>
                <button className={buttonClass}>Home</button>
                <button className={buttonClass}>Kitchen</button>
                <button className={buttonClass}>Fitness</button>
                <button className={buttonClass}>Accessories</button>
            </div>
        </>
    )
}

export default NavBar