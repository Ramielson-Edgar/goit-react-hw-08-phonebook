const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const loading = state => state.auth.loading;

const authSelectors = { getAuthenticated, getUserName, loading };
export default authSelectors;
