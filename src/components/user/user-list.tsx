import {useState} from "react";
import {Link} from "react-router-dom";

export const UserList: React.FC = () => {

  const [users, setUsers] = useState([]);

  const usersPromise = fetch('/findAllUsers')
  .then((response) => response.json())
  .then((users) => {
    setUsers(users);
  });

  return (
      <div>
        <h2>Users</h2>
        <a className="btn btn-primary" href="/userEditor/new">Add New User</a>
        <ul className="list-group">
          {
            users.map(user =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={user.id}>
                  <Link to={
                    // @ts-ignore
                    `/userEditor/${user.id}`}>
                    {// @ts-ignore
                        user.firstName + " " + user.lastName}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  );

}