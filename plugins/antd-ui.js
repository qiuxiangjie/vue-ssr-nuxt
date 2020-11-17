/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-17 15:35:44
 */
import Vue from 'vue'
//import Antd from 'ant-design-vue/lib'
//Vue.use(Antd)

// 按需引入
import { Button, Form, Input, Icon, Checkbox} from 'ant-design-vue';
const components = [
  Button,
  Form,
  Input,
  Icon,
  Checkbox
]

components.forEach(item => Vue.use(item))

