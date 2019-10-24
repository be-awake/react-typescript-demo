## 命名规则

1. 文件 
    - 组件文件：首字母大写 `Apple`
    - 非组件文件：小驼峰命名 `camlCase` 
2. 文件夹：小驼峰命名 `camlCase`

## 各个文件夹功能说明

### public
当前项目启动时请求的html文件

### src
1. components `公共组件`
    - layout: 整体布局
    - config: 左侧导航菜单
    - menuControl：控制左侧导航显示/隐藏
    - interception: 请求封装
        1. 加载中控件
        2. 错误信息显示模块

2. containers `各级导航路由配置&主体展示页面`
    - 根目录下
        - `App.tsx`
        - `config.ts`：导出需要展示的路由
    - 如果新增一级导航需要新建一个文件夹
        - 如果有二级导航，需要在一级导航的文件夹下重新创建文件夹
    - 一级导航的文件夹下需创建 `config.ts` 文件来配置路由，改配置会在 `components/config` 文件夹下被使用
    - `config.ts` 会在 `components/config` 文件夹下被使用

3. stores `公共状态存储`

4. styles `样式文件`

5. utils `工具文件`
    - requests：后台相关请求

## 相关技术
- typescript
- react-router
- mobx