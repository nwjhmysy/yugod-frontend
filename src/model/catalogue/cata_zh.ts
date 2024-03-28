import type { Catalogue } from './type'
import goIcon from '@/assets/images/go_icon.png'
import vueIcon from '@/assets/images/vue_icon.svg'
import dockerIcon from '@/assets/images/docker_icon.png'
import yunIcon from '@/assets/images/yun_icon.svg'
import reactIcon from '@/assets/images/react_icon.svg'
import mysqlIcon from '@/assets/images/mysql_icon.svg'
import httpIcon from '@/assets/images/http_icon.svg'
import frontendIcon from '@/assets/images/frontend_icon.svg'
export const cata_zh: Catalogue[] = [
  {
    name: '前端笔记',
    id: 'frontend',
    path: 'frontend',
    files: [
      {
        name: 'javascript',
        id: 'frontend_1',
        path: 'js',
        descript: 'js相关的知识点',
        img: frontendIcon
      },
      {
        name: 'typescript',
        id: 'frontend_2',
        path: 'ts',
        descript: 'ts语法相关',
        img: frontendIcon
      },
      {
        name: 'css+html',
        id: 'frontend_3',
        path: 'css_html',
        descript: 'css和html的知识',
        img: frontendIcon
      },
      {
        name: 'HTTP',
        id: 'frontend_4',
        path: 'http',
        descript: 'http协议相关的知识',
        img: httpIcon
      },
      {
        name: 'vue',
        id: 'frontend_5',
        path: 'vue',
        descript: 'vue前端框架相关的知识',
        img: vueIcon
      },
      {
        name: 'react',
        id: 'frontend_6',
        path: 'react',
        descript: 'react前端框架相关的知识',
        img: reactIcon
      },
      {
        name: '项目实践',
        id: 'frontend_7',
        path: 'project',
        descript: '项目案例的要点汇总',
        img: vueIcon
      }
    ]
  },
  {
    name: 'go与gin框架',
    id: 'go',
    path: 'go',
    files: [
      {
        name: 'go',
        id: 'go_1',
        path: 'go',
        descript: 'go语言的相关知识',
        img: goIcon
      },
      {
        name: '项目实践',
        id: 'go_2',
        path: 'gin_project',
        descript: 'go项目案例的要点汇总',
        img: goIcon
      }
    ]
  },
  {
    name: 'docker',
    id: 'docker',
    path: 'docker',
    files: [
      {
        name: 'docker',
        id: 'docker_1',
        path: 'docker',
        descript: '关于docker的基础知识',
        img: dockerIcon
      },
      {
        name: '常见问题',
        id: 'docker_2',
        path: 'docker_issues',
        descript: '在使用docker时常常会遇到的问题',
        img: dockerIcon
      },
      {
        name: '官方镜像',
        id: 'docker_3',
        path: 'docker_image',
        descript: '关于docker的一些常用镜像',
        img: dockerIcon
      }
    ]
  },
  {
    name: 'mysql',
    id: 'mysql',
    path: 'mysql',
    files: [
      {
        name: 'mysql笔记与优化',
        id: 'mysql_1',
        path: 'mysql',
        descript: '关于mysql数据库的基础知识和优化',
        img: mysqlIcon
      }
    ]
  },
  {
    name: '云相关',
    id: 'yun',
    path: 'yun',
    files: [
      {
        name: 'linux常用命令',
        id: 'yun_1',
        path: 'linux_command',
        descript: '关于经常被用到的Linux命令',
        img: yunIcon
      },
      {
        name: '搭建云服务器常用命令',
        id: 'yun_2',
        path: 'yun_command',
        descript: '在搭建云服务器时经常会用到的命令',
        img: yunIcon
      },
      {
        name: '云部署',
        id: 'yun_3',
        path: 'yun_deploy',
        descript: '在云端部署服务器的相关知识',
        img: yunIcon
      }
    ]
  }
]
