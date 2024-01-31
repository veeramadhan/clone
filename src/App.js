import "./App.css";
import bgImg from "./Assests/netbg.jpg";
import netflix_logo from "./Assests/Netflix_logo.png";
import gif from "./Assests/giphy.gif";
import tab from "./Assests/tab.png";
import netttv from "./Assests/netttv.gif";
import kid from "./Assests/kids.png";

function App() {
  return (
    <div className="container-fluid full_body ">
      {/* <img src={bgImg} className="test" /> */}

      <div className="bg_img">
        <nav class="navbar navbar-expand-lg ">
          <div class="container main_body mt-3">
            <a class="navbar-brand" href="#">
              <img
                className="img_bg"
                src={netflix_logo}
                height="40px"
                width="180px"
              />
            </a>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
            <div>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex mt-2 li_li">
                  <select style={{ width: "86px", height: "35px" }}>
                    <option>English</option>
                    <option>Tamil</option>
                  </select>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link" href="#">
                    <button className="btn btn-block btn-danger">
                      Sign In
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main_content">
          <p className="display-5 text_bold">
            Unlimited movies, TV shows and more
          </p>
          <p className="text_normal">Watch anywhere. Cancel anytime.</p>
          <p className="text_normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <nav class="navbar">
            <div class="search_body">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 search_body_input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-danger btn_body" type="submit">
                  Get Started <span className="ms-2">&gt;</span>
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>

      <div className="row TV">
        <div className="col-md-5  col-sm-9 mt-5  tv_text">
          <p className="display-5 text_bold mt-2">Enjoy on your TV</p>
          <p className="text_normal mt-2">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className="col-md-5 col-sm-10 ">
          <img
            src={gif}
            height="280px"
            width="450px"
            alt="gif"
            className="gif"
          />
        </div>
      </div>

      <div className="row Mobile">
        <div className="col-md-5 col-sm-9">
          <img
            src={tab}
            height="300px"
            width="550px"
            alt="gif"
            className="gif"
          />
        </div>
        <div className="col-md-5 col-sm-10 mobile_text">
          <p className="display-5 text_bold mt-5">
            Download your shows to watch offline
          </p>
          <p className="text_normal mt-2">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="row tab">
        <div className="col-md-5 mt-5 col-sm-9  text_tab">
          <p className="display-5 text_bold mt-2">Watch everywhere</p>
          <p className="text_normal mt-2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="col-md-5 col-sm-10">
          <img
            src={netttv}
            height="280px"
            width="450px"
            alt="gif"
            className="gif"
          />
        </div>
      </div>

      <div className="row kid">
        <div className="col-md-5 col-sm-9">
          <img
            src={kid}
            height="300px"
            width="550px"
            alt="gif"
            className="gif"
          />
        </div>
        <div className="col-md-5 col-sm-10 text_kid">
          <p className="display-5 text_bold mt-5">Create profiles for kids</p>
          <p className="text_normal mt-2">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="footer_top">
        <p className="display-5 text_bold">Frequently Asked Questions</p>
        <div class="accordion container" id="accordionPanelsStayOpenExample">
          <div class="accordion-item mt-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is Netflix?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body text-start">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
                <p className="mt-2">
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body text-start">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Where can I Watch?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body text-start">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <p className="mt-2">
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefour"
              >
                How do I cancel?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefour"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body text-start">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefive"
              >
                What can I watch on Netflix?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefive"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body text-start">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsesix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsesix"
              >
                Is Netflix good for kids?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsesix"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body text-start">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
                <p className="mt-2">
                  {" "}
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text_normal bottom_text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <nav class="navbar">
          <div class="search_foot">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 search_body_input"
                type="search"
                placeholder="Email address"
                aria-label="Search"
              />
              <button class="btn btn-danger btn_body" type="submit">
                Get Started <span className="ms-2">&gt;</span>
              </button>
            </form>
          </div>
        </nav>
      </div>

      <div className="container foot">
        <div className="row  footer">
          <div className=" d-flex">
            <div className="col-3 col-sm-3">
              <ul>
                <li>Questions? Call 000-800-100-8343</li>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
                <li>Netflix India</li>
              </ul>
            </div>

            <div className="col-xs-3 col-sm-3">
              <ul>
                <li>Help Center</li>
                <li>Job</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>

            <div className="col-xs-2 col-sm-3">
              <ul>
                <li>Accounts</li>
                <li>Way to Watch</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>

            <div className="col-x-3 col-sm-3">
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="bg_img ">
     
<div className="Container">
 <div className="left_nav">
  <img className="img_bg" src={netflix_logo} height="60px" width="200px"/>
  </div>

<div className="right_nav d-felx ">
    <select>
      <option>English</option>
      <option>Tamil</option>
    </select>
    <div>
      <button className="btn btn-block btn-danger">Sign In</button>
    </div>
  </div>
  </div>
 

  

</div> */
}
