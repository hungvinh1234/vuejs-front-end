
import Home from './components/Home.vue';
import Header from './components/Header.vue';
// require('./components/user/User.vue')

const User = resolve => {
    require.ensure(['./components/user/Signup.vue'], () => {
        resolve(require('./components/user/Signup.vue'));
        
    }, 'user');
};

const SignUp = resolve => {
    require.ensure(['./components/user/Signup.vue'], () => {
        resolve(require('./components/user/Signup.vue'));

    }, 'user');
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));

    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));

    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));

    }, 'user');
};

const UserList = resolve => {
    require.ensure(['./components/user/UserList.vue'], () => {
        resolve(require('./components/user/UserList.vue'));

    }, 'user');
};


export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }} ,

    { path: '/signup', name: 'signup', components: {
        default: SignUp,
        'header-top': Header
    } },

    { path: '/userdetail', name: 'userdetail', components: {
        default: UserDetail,
    } },

    { path: '/userlist', name: 'userlist', components: {
        default: UserList,
    } },

    { path: '/useredit', name: 'useredit', components: {
        default: UserEdit,
    } },

    { path: '/user', components: {
        default: User,
        'header-top': Header
    }, children: [
        { path: '', component: UserStart},
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();

        }},
        { path: ':id/edit', component: UserEdit, name: 'userEdit'},
    ]},
    { path: '/redirect-me', redirect: { name: 'home'} },
    { path: '*', redirect: '/'}

];
