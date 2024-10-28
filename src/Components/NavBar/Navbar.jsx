const Navbar = () => {
    return (
        <div className=" flex justify-between mx-32 mt-5 items-center">
            <a href="" className="font-extrabold text-3xl">Book Vibe</a>
            <ul className="flex text-center justify-evenly">
                <li className=" w-36"><a className=" hover:text-[#23BE0A] hover:border-2 border-[#23BE0A] px-6 py-4 rounded-xl" href="">Home</a></li>
                <li className=" w-36"> <a className="hover:text-[#23BE0A] hover:border-2 border-[#23BE0A] px-6 py-4 rounded-xl " href="">Listed Books</a></li>
                <li className=" w-36"> <a className="hover:text-[#23BE0A] hover:border-2 border-[#23BE0A] px-6 py-4 rounded-xl " href="">Pages to Read</a></li>
            </ul>

            <div className="flex gap-4">
                <button className="g-btn btn">Sing in</button>
                <button className="btn b-btn ">Sing up</button>
            </div>
        </div>
    );
};

export default Navbar; 