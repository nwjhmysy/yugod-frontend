import type { Catalogue } from './type'

export const cata_zh: Catalogue[] = [
  {
    name: '前端笔记',
    id: 'frontend',
    path: 'frontend',
    files: [
      {
        name: 'javascript',
        id: 'frontend_1',
        path: 'js'
      },
      {
        name: 'typescript',
        id: 'frontend_2',
        path: 'ts'
      },
      {
        name: 'css+html',
        id: 'frontend_3',
        path: 'css_html'
      },
      {
        name: 'HTTP',
        id: 'frontend_4',
        path: 'http'
      },
      {
        name: 'vue',
        id: 'frontend_5',
        path: 'vue'
      },
      {
        name: 'react',
        id: 'frontend_6',
        path: 'react'
      },
      {
        name: '项目实践',
        id: 'frontend_7',
        path: 'project'
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
        path: 'go'
      },
      {
        name: '项目实践',
        id: 'go_2',
        path: 'gin_project'
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
        path: 'docker'
      },
      {
        name: '常见问题',
        id: 'docker_2',
        path: 'docker_issues'
      },
      {
        name: '官方镜像',
        id: 'docker_3',
        path: 'docker_image'
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
        path: 'mysql'
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
        path: 'linux_command'
      },
      {
        name: '搭建云服务器常用命令',
        id: 'yun_2',
        path: 'yun_command'
      },
      {
        name: '云部署',
        id: 'yun_3',
        path: 'yun_deploy'
      }
    ]
  }
]
