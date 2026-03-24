function Navbar(){
    return(
        <div className="bg-gray-600 flex justify-between items-center px-10 py-4 text-white">
            <h4>Logo</h4>
            <ul className="flex gap-5">
                <li>
                   Home
                </li>
                <li>signup</li>
                <li>login</li>
            </ul>
        </div>
    )
}
export default Navbar;