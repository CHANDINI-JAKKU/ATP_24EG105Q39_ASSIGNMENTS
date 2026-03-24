function User(props){
    let {user}=props;
return( 
   <div className="text-center text-3xl p-5 shadow-2xl rounded-2xl drop-shadow-gray-600">
    <h2 className="text-3xl text-red-400">{user.name}</h2>
    <p className=" mt-2 text-xl">{user.email}</p>
    <img className="block mx-auto rounded-3xl mt-5"src={user.image} alt=""></img>
   </div>
);
}
export default User;