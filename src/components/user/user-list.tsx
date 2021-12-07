import { UserDAO } from "../../backend/daos/UserDAO";
import {User} from "../../backend/models/User";

const UserList: React.FC = () => {

  const userList: User[] = new UserDAO().findAllUsers();

  return (
      <>123</>
  );
}