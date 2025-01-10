
type User = {
    id: number;
    name: string;
    email: string;
};



function getUserInfo(user: User): string {
    return `User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`;
}

const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

console.log(getUserInfo(user));