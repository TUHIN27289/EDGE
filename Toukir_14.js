function getUserInfo(user) {
    return "User Info: ID=".concat(user.id, ", Name=").concat(user.name, ", Email=").concat(user.email);
}
// Example usage
var user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};
console.log(getUserInfo(user));
