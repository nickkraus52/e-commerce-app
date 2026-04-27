function NavBar({ setCategory }) {

    const buttonClass = "az-nav-btn az-text-shadow-md btn btn-sm"

    return (
        <>
            <div className="az-nav az-drop-glow d-flex w-100 flex-wrap justify-content-center align-items-center gap-1 px-1 py-1">
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