import Main from './views/index.vue';

const otherRouter = 
{
    path: '/',
    name: 'home',
    component: Main,
    children:[
        {
            title:'主页',
            path: '/',
            name: 'home',
            component:  (resolve) => require(['./views/page/home.vue'], resolve)
        }
    ]
};

const login={
    path: '/login',
    name: 'login',
    title: '登录',
    component:  (resolve) => require(['./views/page/login/login.vue'], resolve)
};

const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            {
                title:'用户管理',
                path: 'user_role',
                name: 'user_role',
                component:  (resolve) => require(['./views/page/permission/user.vue'], resolve)
            },
            {
                title:'角色管理',
                path: 'role_permission',
                name: 'role_permission',
                component:  (resolve) => require(['./views/page/permission/role.vue'], resolve)
            },
            {
                title:'权限管理',
                path: 'permission',
                name: 'permission',
                component:  (resolve) => require(['./views/page/permission/permission.vue'], resolve)
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
const routers = [
    login,
    ...appRouter,
    otherRouter
];
export default routers;