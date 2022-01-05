import Axios from 'axios';

const baseUrl = 'https://api.github.com';

export const fetchGithubUsers = async () => {

  const url = `${baseUrl}/repos/microsoft/typescript/contributors?per_page=10`;
  const response = await Axios.get(url);

  const data = response.data.map((element) => {

    const loginName = element.login;
    const avatarUrl = element.avatar_url;
    const user = { loginName, avatarUrl };

    return user;
  });

  return data;
};
