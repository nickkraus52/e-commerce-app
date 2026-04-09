import "../index.css"

function NavBar({ setCategory }) {

    const buttonClass = "flex-1 font-bold text-shadow-md text-xs text-[#52DEE5] border-2 rounded-lg border-[#92DCE5] bg-[#383D3B] py-1 hover:bg-[#7C7C7C] hover:border-[#383D3B] hover:text-[#383D3B] mx-0.5 cursor-pointer"

    return (
        <>
            <div className="flex w-full max-w-full min-w-0 flex-wrap justify-center items-center gap-1 px-1 drop-shadow-lg drop-shadow-[#52DEE5]/30 border-b-2 border-[#565b59] bg-[#EEE5E9] py-0.5">
                <button onClick={() => setCategory("Electronics")} className={buttonClass}>Electronics</button>
                <button onClick={() => setCategory("Clothing")} className={buttonClass}>Clothing</button>
                <button onClick={() => setCategory("Home")} className={buttonClass}>Home</button>
                <button onClick={() => setCategory("Kitchen")} className={buttonClass}>Kitchen</button>
                <button onClick={() => setCategory("Fitness")} className={buttonClass}>Fitness</button>
                <button onClick={() => setCategory("Miscellaneous")} className={buttonClass}>Miscellaneous</button>
            </div>
        </>
    )
}

export default NavBar