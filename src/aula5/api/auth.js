import users from "./users.json";

const searchUser = email => {
    for (var i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
            return user;
        }
    }
};

export const signInWithEmailAndPassword = async (email, password) => {
    return new Promise(resolve => {
        const user = searchUser(email);
        if (user && user.senha === password) {
            resolve(user);
        } else {
            resolve(null);
        }
    });
};

export const signOut = async () => {
    return new Promise(resolve => {
        resolve(null);
    });
};
