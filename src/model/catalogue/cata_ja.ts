import type { Catalogue } from './type'
import goIcon from '@/assets/images/go_icon.png'
import vueIcon from '@/assets/images/vue_icon.svg'
import dockerIcon from '@/assets/images/docker_icon.png'
import yunIcon from '@/assets/images/yun_icon.svg'
import reactIcon from '@/assets/images/react_icon.svg'
import mysqlIcon from '@/assets/images/mysql_icon.svg'
import httpIcon from '@/assets/images/http_icon.svg'
import frontendIcon from '@/assets/images/frontend_icon.svg'
export const cata_ja: Catalogue[] = [
  {
    name: '前列ノート',
    id: 'frontend',
    path: 'frontend',
    files: [
      {
        name: 'javascript',
        id: 'frontend_1',
        path: 'js',
        descript: 'jsに関する知識です',
        img: frontendIcon
      },
      {
        name: 'typescript',
        id: 'frontend_2',
        path: 'ts',
        descript: 'ts構文関連です',
        img: frontendIcon
      },
      {
        name: 'css+html',
        id: 'frontend_3',
        path: 'css_html',
        descript: 'cssとhtmlの知識です',
        img: frontendIcon
      },
      {
        name: 'HTTP',
        id: 'frontend_4',
        path: 'http',
        descript: 'httpプロトコルに関する知識です',
        img: httpIcon
      },
      {
        name: 'vue',
        id: 'frontend_5',
        path: 'vue',
        descript: 'vueのフロントエンドフレームワークに関する知識です',
        img: vueIcon
      },
      {
        name: 'react',
        id: 'frontend_6',
        path: 'react',
        descript: 'reactのフロントエンドフレームワークに関する知識です',
        img: reactIcon
      },
      {
        name: 'プロジェクトの実践',
        id: 'frontend_7',
        path: 'project',
        descript: 'プロジェクト事例のポイントまとめです',
        img: vueIcon
      }
    ]
  },
  {
    name: 'goとginフレームワーク',
    id: 'go',
    path: 'go',
    files: [
      {
        name: 'go',
        id: 'go_1',
        path: 'go',
        descript: 'go言語に関する知識です',
        img: goIcon
      },
      {
        name: 'プロジェクトの実践',
        id: 'go_2',
        path: 'gin_project',
        descript: 'goのプロジェクト事例のポイントまとめです',
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
        descript: 'dockerに関する基礎知識です',
        img: dockerIcon
      },
      {
        name: 'よくある質問',
        id: 'docker_2',
        path: 'docker_issues',
        descript: 'dockerを使う際によくある問題です',
        img: dockerIcon
      },
      {
        name: 'Official mirror',
        id: 'docker_3',
        path: 'docker_image',
        descript: 'dockerのミラーリングについてよく使われています',
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
        name: 'mysqlノートと最適化',
        id: 'mysql_1',
        path: 'mysql',
        descript: 'mysqlデータベースの基礎知識と最適化についてです',
        img: mysqlIcon
      }
    ]
  },
  {
    name: 'クラウド',
    id: 'yun',
    path: 'yun',
    files: [
      {
        name: 'linuxよく使われる命令',
        id: 'yun_1',
        path: 'linux_command',
        descript: 'よく使われるLinuxのコマンドです',
        img: yunIcon
      },
      {
        name: 'クラウドよく使われる命令',
        id: 'yun_2',
        path: 'yun_command',
        descript: 'クラウドサーバーの構築でよく使われるコマンドです',
        img: yunIcon
      },
      {
        name: 'クラウド配置',
        id: 'yun_3',
        path: 'yun_deploy',
        descript: 'クラウドにサーバーを配置することについての知識です',
        img: yunIcon
      }
    ]
  }
]
