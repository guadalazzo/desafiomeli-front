import Layout from '../components/Layout';
import Detail from '../components/Detail';
import Breadcrumbs from '../components/Breadcrumbs';
require("isomorphic-fetch");
export default () =>
<Layout>
	<Breadcrumbs></Breadcrumbs>
	<Detail></Detail>
</Layout>