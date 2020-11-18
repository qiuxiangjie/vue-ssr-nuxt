/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-18 17:27:21
 */
import Vue from 'vue'
//import Antd from 'ant-design-vue/lib'
//Vue.use(Antd)

// 按需引入
import { Button, Form, Input, Icon, Checkbox,Badge} from 'ant-design-vue';
const components = [
  Button,
  Form,
  Input,
  Icon,
  Checkbox,
  Badge
]

components.forEach(item => Vue.use(item))

