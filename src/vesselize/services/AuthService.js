class AuthService {
  constructor(maxAdminUserId) {
    this.maxAdminUserId = maxAdminUserId;
  }

  isAdmin(user) {
    return user.id <= this.maxAdminUserId;
  }
}

export default AuthService;
