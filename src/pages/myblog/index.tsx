import { Layout } from "../../components";
import logo from '@/images/logo.png'
const MyBlog = () => {

  return (
    <Layout>
      <div className='container-layout fullCenter-flexColumn'>
        <img className='square-300-max p-20' src={logo} alt="" />
          <p className="fz-32 txt-primary isBold">On Progress</p>
      </div>
    </Layout>
  );
};

export default MyBlog;