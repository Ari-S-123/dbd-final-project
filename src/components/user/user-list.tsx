import {useState} from "react";

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
        <ul className="list-group">
          {
            users.map(user =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={user.id}>
                  {// @ts-ignore
                    user.firstName + " " + user.lastName}
                </li>)
          }
        </ul>
      </div>
  );

}