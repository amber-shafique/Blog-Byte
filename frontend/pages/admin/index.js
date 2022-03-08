import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5"><h2>Admin Dashboard</h2></div>

            <div className="col-md-4">
              <ul class="list-group">
              
                <li className="list-group-item list-group-item-action">
                <Link href="/admin/crud/category-tag">Create Category</Link>
                </li>
                <li className="list-group-item list-group-item-action">
                <Link href="/admin/crud/category-tag">Create Tag</Link>
                </li>

                <li className="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
                <li className="list-group-item list-group-item-action">Morbi leo risus</li>
                <li className="list-group-item list-group-item-action">Porta ac consectetur ac</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
              </ul>
            </div>
            <div className="col-md-8">right</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};
export default AdminIndex;
