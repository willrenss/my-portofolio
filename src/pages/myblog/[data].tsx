import { Layout } from "../../components";


const MyBlog = () => {
    const { data } = useParams()
    return (
        <Layout>
            <div className='container-layout'>
                my blog {data}
            </div>
        </Layout>
    );
};

export default MyBlog;