
const Navbar = ({ appTitle }) => {
  return (
    <div className="bg-gray-800 text-white text-lg flex justify-center gap-5 p-4">
      <p>{appTitle}</p>
      <p className="">Home</p>
      <p className="">Todo</p>
      <p className="">About</p>
    </div>
  );
};

export default Navbar;

