import User from "./User"; 
import { users } from "../data/users.js";

function UsersList() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {users.map((userObj) => (
                <User user={userObj} key={userObj.email} />
            ))}
        </div>
    );
}

export default UsersList;