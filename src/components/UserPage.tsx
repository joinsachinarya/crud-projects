import { useParams } from "react-router-dom";
import { User } from "./HomePage";
import { useStoreState } from "easy-peasy";
import { State } from "../state/state";

const UserPage: React.FC = () => {
  const userList = useStoreState((state: State) => state.userList);
  const params = useParams();
  const { id } = params;
  const userInfo = userList.find((it: User) => it.id === Number(id));

  return (
    <div className="bg-red-50 text-xl text-center rounded-sm">
      <h2> Welcome {userInfo?.name}! </h2>
      {userInfo ? (
        <h4>
          Age: {userInfo.age}
          <br />
          Email: {userInfo.email}
        </h4>
      ) : (
        <h4>User ID not found from User List</h4>
      )}
    </div>
  );
};

export default UserPage;
