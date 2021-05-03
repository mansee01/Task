import logo from './logo.svg';
import dashboard from './dashboard.svg';
import orders from './orders.svg';
import products from './products.svg';
import membership from './membership.svg';
import settings from './settings.svg';
import discount from './discount.svg';
import logout from './logout.svg';
import add from './add.svg';
import './App.css';


function App() {
  return (

    <div className="main-div">

      <div className="topbar-div">
        <img src={logo} className="topbar-logo" alt="logo" />
        <div className="topbar-line"></div>
        <div className="topbar-title">
          Shop Name
        </div> 
        <div className="topbar-title1">
          John Doe
        </div>
        <div className="topbar-profile">A
          {/* <div className="topbar-profile-sym">A</div> */}
        </div>
      </div>

      <div className="table-div"> 
        <div className="sidebar-div">

          <div className="sidebar-line"></div>

          <span className="sidebar-menu">MENU</span>
          <span className="sidebar-rectangle"></span>
          <div className="sidebar-dashboard">
            <img src={dashboard} className="dashboard-icon" alt="dashboard" />
            <h3 className="dashboard-title">Dashboard</h3>
          </div>

          <div className="sidebar-order">
            <img src={orders} className="order-icon" alt="orders" />
            <h3 className="order-title">Order</h3>
          </div>

          <div className="sidebar-product">
            <img src={products} className="product-icon" alt="products" />
            <h3 className="product-title">Product</h3>
          </div>

          <div className="sidebar-membership">
            <img src={membership} className="membership-icon" alt="membership" />
            <h3 className="membership-title">Membership</h3>
          </div>

          <div className="sidebar-discount">
            <img src={discount} className="discount-icon" alt="discount" />
            <h3 className="discount-title">Discount</h3>
          </div>

          <div className="sidebar-settings">
            <img src={settings} className="settings-icon" alt="settings" />
            <h3 className="settings-title">Settings</h3>
          </div>

          <div className="sidebar-logout">
            <img src={logout} className="logout-icon" alt="logout" />
            <h3 className="logout-title">Logout</h3>
          </div>

        </div>
        
        <div>
          <h2 className="pageheader-h2">Products</h2>
          <h3 className="pageheader-h3">Manage your products here</h3>

          <div className="button-div">
            <img src={add} alt="add" />
            <h3>Add Product</h3>
          </div>

          {/* <div>
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>

              <tr>
                <td>
                  <img />
                </td>
                <td>Lorem ipsum dolor</td>
                <td>Fruit</td>
                <td>In Stock</td>
                <td>$250</td>
                <td>
                  <img />
                  <img />
                </td>
              </tr>
            </table>
          </div> */}


        </div>
      </div>
    </div>
  );
}

export default App;
