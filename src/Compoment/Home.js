import './Assest/style.css'
//import './script.js'
function Home(){
    return(
        
        <div className="holder">
  <header id="header">
    <div className="container">
      <div className="header-top flex">
        <div className="head-top-left-icon flex">
          <button type="button" className="btn-lang-option flex">
            <img src={require("./Assest/images/menu-icon.png")} alt="menu icon" />
            <ul>
              <a href="https://www.burgerbaeclothing.com/account/login?return_url=%2Faccount" target="_blank"><li>Login</li></a>
              <a href="https://www.burgerbaeclothing.com/" target="_blank"><li>Shop</li></a>
            </ul>
          </button>
          <button type="button" className="btn-search-bar flex">
            <img src={require("./Assest/images/search-icon.png")} alt="search icon" />
            <input type="search" className="search-box" />
          </button> 
        </div>
        <div className="brand-name flex">
          {/* <a href = "//">
                      <img src =images/logo.png") alt = "site logo">
                      
                  </a> */}
          <h2> ClooDrip </h2>
                  </div>
        <div className="head-top-right-icon flex">
          <button type="button" className="btn-share flex">
            <img src={require("./Assest/images/share-icon.png")} alt="share icon" />
          </button>
          <button type="button" className="btn-shopping-cart flex">
            <img src={require("./Assest/images/cart-icon.png")} alt="shopping cart icon" />
          </button>
        </div>
      </div>
      <div className="header-main">
        {/* header main content */}
        <div className="header-main-content">
          <div className="header-main-list">
            <div className="header-main-item" data-id={1}>
              <h1>OverTee and Tracky </h1>
              <p className="text">Less Quantity But Quality Oversized Tshirts and Tech Fleece Tracksuits.</p>
              <a href="https://www.burgerbaeclothing.com/" className="btn">discover more</a>
            </div>
            <div className="header-main-item" data-id={2}>
              <h1>Casual Wear</h1>
              <p className="text">Quality Over Quantity</p>
              <a href="https://www.burgerbaeclothing.com/" className="btn">discover more</a>
            </div>
            <div className="header-main-item" data-id={3}>
              <h1>Customized Clothing</h1>
              <p className="text">Quality Over Quantity</p>
              <a href="https://www.burgerbaeclothing.com/" className="btn">discover more</a>
            </div>
          </div>
        </div>
        {/* end of header main content */}
      </div>
    </div>
    <button type="button" className="header-left-btn flex">
      <i className="fas fa-chevron-left" />
    </button>
    <button type="button" className="header-right-btn flex">
      <i className="fas fa-chevron-right" />
    </button>
  </header>
  <main>
    <section id="services">
      <div className="container">
        <div className="services-list flex">
          <div className="services-item">
            <img src={require("./Assest/images/wallet-icon.png")} alt="wallet icon" />
            <h2>10% Discount</h2>
            <p className="text">10% Discount on all Orders </p>
          </div>
          <div className="services-item">
            <img src={require("./Assest/images/bus-icon.png")}  alt="wallet icon" />
            <h2>Delivery Within 3-4 Days </h2>
            <p className="text">Delivery within 3-4 working days</p>
          </div>
          <div className="services-item">
            <img src={require("./Assest/images/person-icon.png")} alt="wallet icon" />
            <h2>10,000+ Customer</h2>
            <p className="text" />
          </div>
        </div>
      </div>
    </section>
    <section id="categories">
      <div className="container">
        <div className="categories-list flex">
          <div className="categories-item">
            <img src="https://cf.shopee.ph/file/6003dcd615ef86ea60833899c9c1e639" />
            <a href="//" className="btn">outwear</a>
          </div>
          <div className="categories-item">
            <img src={require("./Assest/images/categ2.png")} />
            <a href="//" className="btn">blouse</a>
          </div>
          <div className="categories-item">
            <img src={require("./Assest/images/categ3.png")} />
            <a href="//" className="btn">dresses</a>
          </div>
          <div className="categories-item">
            <img src="https://i2.wp.com/www.fashionchingu.com/wp-content/uploads/2020/12/Taehyung-BTS-Black-Oversized-T-Shirt-With-Man-Sketch-Print-22.jpg" />
            <a href="//" className="btn">t-shirts</a>
          </div>
        </div>
      </div>
    </section>
    <section id="trending">
      <div className="container">
        <div className="section-heading">
          <h2>Top Trending</h2>
          <div className="line" />
          <p className="text">Streetwear And Casuals.</p>
        </div>
        <div className="trending-content">
          <div className="trending-filter-btns flex">
            <button type="button" className="filter-btn">New Products</button>
            <button type="button" className="filter-btn">Prices drop</button>
            <button type="button" className="filter-btn">Best sales</button>
          </div>
          <div className="trending-filter-list flex">
            <div className="trending-item" data-product={1}>
              <div className="trending-img">
                <img src={require ("./Assest/images/trend1.png")} alt="trending images" />
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Full Sleeves Printed Top</h3>
                <span className="price">₹ 399.00</span>
                <span className="old-price">₹ 799.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={2}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend2.png")} alt="trending images" />
                <span className="discount-text flex">-20%</span>
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Cream Half Sleeves Top</h3>
                <span className="price">₹ 399.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={3}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend3.png")} alt="trending images" />
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Grey Full Sleeves Sweatshirt</h3>
                <span className="price">₹ 199.00</span>
                <span className="old-price">₹ 599.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={1}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend4.png")} alt="trending images" />
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Full Sleeves Knitted Top </h3>
                <span className="price">₹ 199.00</span>
                <span className="old-price">₹ 499.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={2}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend5.png")} alt="trending images" />
                <span className="discount-text flex">-20%</span>
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Tank Top</h3>
                <span className="price">₹ 199.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={3}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend6.png")} alt="trending images" />
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Black Top</h3>
                <span className="price">₹ 199.00</span>
                <span className="old-price">₹ 299.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={1}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend7.png")} alt="trending images" />
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Grey Full Sleeves Sweatshirt</h3>
                <span className="price">₹ 299.00</span>
                <span className="old-price">₹ 599.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={2}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend8.png")} alt="trending images" />
                <span className="discount-text flex">-20%</span>
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>White Top</h3>
                <span className="price">₹ 199.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={3}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend9.png")} alt="trending images" />
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Blue And White Knitted Top</h3>
                <span className="price">₹ 199.00</span>
                <span className="old-price">₹ 299.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={1}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend10.png")} alt="trending images" />
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Grey Half Top</h3>
                <span className="price">₹ 199.00</span>
                <span className="old-price">₹ 299.00</span>
              </div>
            </div>
            <div className="trending-item" data-product={1}>
              <div className="trending-img">
                <img src={require("./Assest/images/trend11.png")} alt="trending images" />
                <span className="new-text flex">New</span>
                <div className="trending-btns flex">
                  <a href="//" className="btn">quick view</a>
                  <a href="//" className="btn">more details</a>
                </div>
              </div>
              <div className="trending-item-price">
                <h3>Biege Shacket</h3>
                <span className="price">₹ 699.00</span>
                <span className="old-price">₹ 1499.00</span>
              </div>
            </div>
          </div>
          <a href="https://www.burgerbaeclothing.com/" className="btn">all products</a>
        </div>
      </div>
    </section>
    <section id="banner" className="flex">
      <div className="banner-left flex">
        <img src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.jpg?s=612x612&w=0&k=20&c=M4QqVxeUyMeChfMqOucfxtVaVMZ51g00-2tlc_Vgrx0=" alt="banner image" />
      </div>
      <div className="banner-right flex">
        <div className="section-heading">
          <h2>About Our Products</h2>
          <div className="line" />
          <p className="text">We believe in quality not quantity. Our products are made up of breathable imported fabrics with great quality with 100% pure fabric check with ecofriendly material. </p>
          <a href="https://www.burgerbaeclothing.com" className="btn">discover more</a>
        </div>
      </div>
    </section>
    <section id="brands">
      <div className="brands-list flex">
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo1.png")} alt="brand image" />
        </div>
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo2.png")} alt="brand image" />
        </div>
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo3.png")} alt="brand image" />
        </div>
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo4.png")} alt="brand image" />
        </div>
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo5.png")} alt="brand image" />
        </div>
        <div className="brand-item flex" j>
          <img src={require("./Assest/images/logo6.png")} alt="brand image" />
        </div>
      </div>
    </section>
    <section id="photos">
      <div className="photos-list flex">
        <div className="photo-item">
          <img src={require("./Assest/images/insta1.png")} alt="instagram photos" />
        </div>
        <div className="photo-item">
          <img src={require("./Assest/images/insta2.png")} alt="instagram photos" />
        </div>
        <div className="photo-item">
          <img src={require("./Assest/images/insta3.png")} alt="instagram photos" />
        </div>
        <div className="photo-item">
          <img src={require("./Assest/images/insta4.png")} alt="instagram photos" />
        </div>
        <div className="photo-item">
          <img src={require("./Assest/images/insta5.png")} alt="instagram photos" />
        </div>
        <div className="photo-item">
          <img src={require("./Assest/images/insta6.png")} alt="instagram photos" />
        </div>
        <span>//Instagram</span>
      </div>
    </section>
    <section id="map">
      <img src={require("./Assest/images/Map.png")} alt="location map" />
    </section>
  </main>
  <footer id="footer">
    <div className="container">
      <div className="footer-list flex">
        <div className="footer-item one">
          <h2>ClooDrip</h2>
          <p className="text">Keep shopping with us and Keep Coming again .</p>
          <form>
            <div className="form-element flex">
              <input type="email" className="form-control" placeholder="Enter your e-mail" />
              <button type="submit" className="subs-btn">subscribe</button>
            </div>
          </form>
        </div>
        <div className="footer-item">
          <h2>Products</h2>
          <ul>
            <li><a href="//">Prices drop</a></li>
            <li><a href="//">New products</a></li>
            <li><a href="//">Best sales</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Information</h2>
          <ul>
            <li><a href="//">Delivery</a></li>
            <li><a href="//">Legal Notice</a></li>
            <li><a href="//">Terms and Conditions of use</a></li>
            <li><a href="//">About us</a></li>
            <li><a href="//">Secure payment</a></li>
            <li><a href="//">Contact us</a></li>
            <li><a href="//">Sitemap</a></li>
            <li><a href="//">Stores</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Your account</h2>
          <ul>
            <li><a href="//">Addresses</a></li>
            <li><a href="//">Credit sales</a></li>
            <li><a href="//">Orders</a></li>
            <li><a href="//">Personal info</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright-text">
      <div className="container">
        <p className="text">© Ankur Maheshwari </p>
        <div>
          <img src={require("./Assest/images/pay_method.png")} alt="payment method" />
        </div>
      </div>
    </div>
  </footer>
</div>

            
        
    )
}
export default Home ;