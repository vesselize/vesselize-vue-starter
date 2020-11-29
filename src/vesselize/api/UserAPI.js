class UserAPI {
  BASE_URL = '';

  getUser(id) {
    const { BASE_URL } = this;

    return fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());
  }

  setVesselize(vesselize) {
    const Constants = vesselize.get('AppConstants');

    this.BASE_URL = Constants.JSON_PLACEHOLDER_BASE_URL;
  }
}

export default UserAPI;
