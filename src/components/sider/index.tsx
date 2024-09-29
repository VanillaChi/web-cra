import React from 'react'
import { Avatar, Dropdown, Layout as AntdLayout, Menu, Tooltip } from 'antd'
import {
  RightCircleFilled,
  LeftCircleFilled,
  MenuOutlined,
} from '@ant-design/icons'
import logo from '../../assets/image/icon.png'
import avatar from '../../assets/image/nurse_woman_avatar.png'
import './styles.scss'

const { Sider: AntdSider } = AntdLayout

const siderStyle: React.CSSProperties = {
  // textAlign: 'center',
  // lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: 'white',
}

interface SiderProps {
  activeTab?: string
}

const CSS_PREFIX = 'pi-sider'

const Sider: React.FC<SiderProps> = (props) => {
  const username = 'Zaire Levin'
  const role = 'Manager'
  const [collapsed, setCollapsed] = React.useState(false)

  const person_menu = (
    <Menu onClick={() => {}}>
      <Menu.Item key='1'>Account Settings</Menu.Item>
      <Menu.Item key='2'>Log Out</Menu.Item>
    </Menu>
  )
  return (
    <AntdSider
      className={CSS_PREFIX}
      width='15%'
      style={siderStyle}
      collapsed={collapsed}
    >
      <div className={`${CSS_PREFIX}-left`}>
        <div className={`${CSS_PREFIX}-left-top`}>
          <div className='pi-company'>
            <Tooltip placement='right' title='back to home'>
              <a className='pi-company-name' href='/'>
                <Avatar src={logo} size={35} />
                <div className='pi-company-text'>Header</div>
              </a>
            </Tooltip>
          </div>
        </div>
        <div className={`${CSS_PREFIX}-left-bottom`}>
          <hr />
          <Dropdown overlay={person_menu} trigger={['click']}>
            <div className='pi-person'>
              <Avatar
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                src={avatar}
              >
                {/*{username && username[0]?.toUpperCase()}*/}
              </Avatar>
              {!collapsed && (
                <>
                  <div className='pi-person-text-container'>
                    <div className='pi-person-name'>{username}</div>
                    <div className='pi-person-role'>{role}</div>
                  </div>
                  <div className='pi-person-icon'>
                    <MenuOutlined />
                  </div>
                </>
              )}
            </div>
          </Dropdown>
        </div>
      </div>
      <div className={`${CSS_PREFIX}-right`}>
        <div className='trigger-div' onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <RightCircleFilled className='trigger-icon' />
          ) : (
            <LeftCircleFilled className='trigger-icon' />
          )}
        </div>
      </div>
    </AntdSider>
  )
}

export default Sider
