const checkAuth = () => {
    const userId = Number(localStorage.getItem('userId'));
    const role = localStorage.getItem('role'); // 예: 'ADMIN' or 'USER'

    const isAdmin = role === 'ADMIN';

    return { userId, role, isAdmin };
};

export default checkAuth;
