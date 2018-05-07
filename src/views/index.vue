<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="clickMenuItem">
                <Submenu name="#">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        权限管理
                    </template>
                    <MenuItem name="/access/user_role">
                        <Icon type="ios-navigate"></Icon>
                        <span class="layout-text">用户角色管理</span>
                    </MenuItem>
                    <MenuItem name="/access/role_permission">
                        <Icon type="ios-keypad"></Icon>
                        <span class="layout-text">角色权限管理</span>
                    </MenuItem>
                    <MenuItem name="/access/permission">
                        <Icon type="ios-analytics"></Icon>
                        <span >权限信息管理</span>
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: auto;min-height:600px;">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
    import tabMenu from './page/components/tab_menu.vue';

    export default {
        data () {
            return {
                opened_page:[]
            };
        },
        components:{
        },
        computed: {
        },
        methods: {
            clickMenuItem (name) {
                this.$router.push(name);
                let page={};
                page.title=this.$router.currentRoute.name;
                page.path=this.$router.currentRoute.path;
                this.$data.opened_page.push(page);
                console.log( this.$data.opened_page);
            }
        },
        mounted:function(){
            let page={};
            page.title=this.$router.currentRoute.name;
            page.path=this.$router.currentRoute.path;
            this.$data.opened_page.push(page);
        }
    }
</script>