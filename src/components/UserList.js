import { useState, useEffect } from 'react';
import { fetchGithubUsers } from '../api/services/User';

function UserList() {

  const [users, setUsers] = useState();

  useEffect(() => {
    callApiFetchUser()
  }, []);

  const callApiFetchUser = async ()=> {
    setUsers(await fetchGithubUsers())
  };

  const renderData = (data) => {
    if (data) {
      return data.map((element, index) => {
        return <tr key={index}>
          <td>{element.loginName}</td>
          <td>
            <img className="User-Image" src={element.avatarUrl} alt={element.avatarUrl}/>
          </td>
        </tr>
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name </th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {renderData(users)}
      </tbody>
    </table>
  );
};

export default UserList;
