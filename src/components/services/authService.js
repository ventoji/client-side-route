import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authService = {

    isAuthenticated() {

        return cookies.get('myCat') === 'true';
    },


    signIn(cb) {
        cookies.set('myCat', true, {
            path: '/',
            sameSite: true
        });
        setTimeout(cb, 100);
    },

    signOut(cb) {
        cookies.set('myCat', false, {
            path: '/',
            sameSite: true
        });
        setTimeout(cb, 100);
    }
};

export default authService;