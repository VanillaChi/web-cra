import React from 'react'
import { Layout as AntdLayout } from 'antd'
import './styles.scss'

const { Header, Content, Footer } = AntdLayout

const headerStyle: React.CSSProperties = {
  backgroundColor: '#FAFAFA',
}

const contentStyle: React.CSSProperties = {}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
}

interface LayoutProps {
  className?: string
  header?: React.ReactNode
  sider?: React.ReactNode
  siderPercent?: string
  content?: React.ReactNode
  footer?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  className = '',
  header,
  sider,
  content = <div>Content</div>,
  footer,
}) => {
  if (sider) {
    return (
      <AntdLayout className={`pi-layout ${className}`}>
        {sider}
        <AntdLayout>
          {header && <Header style={headerStyle}>{header}</Header>}
          <Content style={contentStyle}>{content}</Content>
          {footer && <Footer style={footerStyle}>{footer}</Footer>}
        </AntdLayout>
      </AntdLayout>
    )
  }
  return (
    <AntdLayout className={`pi-layout ${className}`}>
      {header && <Header style={headerStyle}>{header}</Header>}
      <Content style={contentStyle}>{content}</Content>
      {footer && <Footer style={footerStyle}>{footer}</Footer>}
    </AntdLayout>
  )
}

export default Layout
