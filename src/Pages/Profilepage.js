import Nav from '../Components/NavBar';
import '../Page Style/ProfilepageCSS.css';

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.header}>
        <div className={styles.malutoTransBy}>MALUTO TRANS BY MEHRY</div>
        <div className={styles.home}>Home</div>
        <div className={styles.forum}>Forum</div>
        <div className={styles.about}>About</div>
        <div className={styles.gallery}>Gallery</div>
        <div className={styles.review}>Review</div>
        <div className={styles.loginButton}>
          <div className={styles.login}>PROFILE</div>
        </div>
        <img
          className={styles.malutotranslogoIcon}
          alt=""
          src="/malutotranslogo@2x.png"
        />
      </div>
      <div className={styles.pageHeading}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.divider} />
      </div>
      <div className={styles.home1}>Home</div>
      <div className={styles.button}>
        <div className={styles.searchBar}>
          <div className={styles.login}>Search</div>
        </div>
      </div>
      <div className={styles.myPosts}>My Posts</div>
      <div className={styles.allPosts}>All Posts</div>
      <img
        className={styles.magnifyGlassIcon}
        alt=""
        src="/magnify-glass@2x.png"
      />
      <div className={styles.profilePageChild} />
      <div className={styles.profilePageItem} />
      <div className={styles.loginButton1}>
        <div className={styles.login}>FIRST NAME, LAST NAME</div>
      </div>
      <div className={styles.login2}>LATEST</div>
      <div className={styles.malutoTransportation}>MALUTO TRANSPORTATION</div>
      <div className={styles.andTravelCorporation}>
        AND TRAVEL CORPORATION BY MEHRY
      </div>
      <div className={styles.usernameBirthdayDescription}>
        <p className={styles.usernameBirthday}>UsernameBirthday</p>
        <p className={styles.usernameBirthday}>&nbsp;</p>
        <p className={styles.usernameBirthday}>Description</p>
      </div>
      <img className={styles.user21} alt="" src="/user-2-1@2x.png" />
      <div className={styles.movingForwardPassengersContainer}>
        <span>{`Moving `}</span>
        <i className={styles.forward}>forward</i>
        <span>{`, Passengers `}</span>
        <i className={styles.forward}>
          <span>first</span>
          <span className={styles.span}>.</span>
        </i>
      </div>
      <section className={styles.frame}>
        <div className={styles.southBoundRoutesParent}>
          <h3 className={styles.southBoundRoutes}>South Bound Routes</h3>
          <h3 className={styles.thisIsYourContainer}>
            <p
              className={styles.usernameBirthday}
            >{`This is your forum post. Use this space to connect with `}</p>
            <p
              className={styles.usernameBirthday}
            >{`your audience in a way that’s current and interesting. `}</p>
            <p
              className={styles.usernameBirthday}
            >{`Post relevant information that will encourage discussion and `}</p>
            <p className={styles.usernameBirthday}>collaboration.....</p>
          </h3>
          <div className={styles.frame1}>
            <img className={styles.user211} alt="" src="/user-2-1@2x.png" />
            <h1 className={styles.firstNameLast}>First Name Last Name</h1>
          </div>
          <div className={styles.frame2}>
            <img className={styles.like11} alt="" src="/like-1-1@2x.png" />
            <div className={styles.frame3}>
              <h3 className={styles.like}>Like</h3>
              <div className={styles.frame4}>
                <img
                  className={styles.comment22}
                  alt=""
                  src="/comment-2-1@2x.png"
                />
                <h3 className={styles.like}>Comment</h3>
              </div>
            </div>
          </div>
          <div className={styles.frame5}>
            <div className={styles.frame6}>
              <div className={styles.div}>0</div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.div1}>0</div>
            </div>
            <img
              className={styles.nounEye15457301Icon}
              alt=""
              src="/nouneye1545730-11@2x.png"
            />
            <div className={styles.frame8}>
              <img
                className={styles.comment22}
                alt=""
                src="/comment-2-1@2x.png"
              />
            </div>
            <div className={styles.divider1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
