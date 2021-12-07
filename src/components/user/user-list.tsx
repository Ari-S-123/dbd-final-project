import axios from "axios";
import {User} from "../../backend/models/User";
import {useQuery} from "react-query";

// TODO: FIX
export const UserList: React.FC = () => {

  const usersPromise = async () => {
    return axios.get<User[]>("http://localhost:4000/findAllUsers");
  };

  const useAllUsers = () => {
    return useQuery<User[], Error>('users', async () => {
      const {data} = await usersPromise();
      return data;
    });
  };

  const {isLoading, isError, data, error} = useAllUsers();

  const users: User[] | undefined = data;

  return (
      <>{users}</>
  );
}