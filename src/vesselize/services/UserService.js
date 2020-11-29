class UserService {
  userAPI = null;

  async getUser(userId) {
    const user = await this.userAPI.getUser(userId);

    // process user...

    const { id, name, username, email } = user;

    return {
      id,
      name,
      username,
      email,
    };
  }

  setVesselize(vesselize) {
    this.userAPI = vesselize.get('UserAPI');
  }
}

export default UserService;
