
import { Layout, theme } from "antd"
import ContentHeader from "../components/Header"
import SiderContent from "../components/Sider"
import Footer from "../components/Footer"


const { Content } = Layout

function PublicLayout({ children }: any) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()


  return (
    <Layout>
      <ContentHeader />
      <Layout>
        <SiderContent />
        <Layout >
          <Content
            style={{
              padding: 79,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              backgroundColor:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(215, 215, 215, 1) 100%)",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default PublicLayout