import { Layout } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';


export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: 'center' }}>

      <p className="FooterTitle">
        Copyright ©2023 ARPCE - Tous droits réservés{' '}
      </p>
      <div className="Icons">
        <FacebookFilled />
        <InstagramFilled />
        <YoutubeFilled />
        <TwitterCircleFilled />
      </div>
    </Footer>
  );
}
