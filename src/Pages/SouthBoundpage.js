import styles from "./SouthBoundPage.module.css";

const SouthBoundPage = () => {
  return (
    <div className={styles.southBoundPage}>
      <div className={styles.header}>
        <div className={styles.malutoTransBy}>MALUTO TRANS BY MEHRY</div>
        <div className={styles.home}>Home</div>
        <div className={styles.forum}>Forum</div>
        <div className={styles.about}>About</div>
        <div className={styles.gallery}>Gallery</div>
        <div className={styles.review}>Review</div>
        <div className={styles.loginButton}>
          <div className={styles.login}>LOGIN</div>
        </div>
        <img
          className={styles.malutotranslogoIcon}
          alt=""
          src="/malutotranslogo@2x.png"
        />
      </div>
      <div className={styles.pageHeading}>
        <div className={styles.southBoundRoute}>South-Bound Route</div>
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
      <div className={styles.button1}>
        <div className={styles.login}>Create New Post</div>
      </div>
      <div className={styles.frame}>
        <h3 className={styles.sortByRecent}>South Bound Route |</h3>
      </div>
      <div className={styles.frame1}>
        <h3 className={styles.sortByRecent}>Sort By: Recent Activity</h3>
      </div>
      <img className={styles.southBoundPageChild} alt="" src="/arrow-2.svg" />
      <div className={styles.moreActionsParent}>
        <h3 className={styles.moreActions}>More Actions</h3>
        <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
      </div>
      <section className={styles.frame2}>
        <div className={styles.southBoundRoutesParent}>
          <h3 className={styles.southBoundRoutes}>South Bound Routes</h3>
          <h3 className={styles.thisIsYourContainer}>
            <p
              className={styles.thisIsYour}
            >{`This is your forum post. Use this space to connect with `}</p>
            <p
              className={styles.thisIsYour}
            >{`your audience in a way that’s current and interesting. `}</p>
            <p
              className={styles.thisIsYour}
            >{`Post relevant information that will encourage discussion and `}</p>
            <p className={styles.thisIsYour}>collaboration.....</p>
          </h3>
          <div className={styles.frame3}>
            <img className={styles.user21} alt="" src="/user-2-1@2x.png" />
            <h1 className={styles.firstNameLast}>First Name Last Name</h1>
          </div>
          <div className={styles.frame4}>
            <img className={styles.like11} alt="" src="/like-1-1@2x.png" />
            <div className={styles.frame5}>
              <h3 className={styles.sortByRecent}>Like</h3>
              <div className={styles.frame6}>
                <img
                  className={styles.comment22}
                  alt=""
                  src="/comment-2-1@2x.png"
                />
                <h3 className={styles.sortByRecent}>Comment</h3>
              </div>
            </div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.frame8}>
              <div className={styles.div}>0</div>
            </div>
            <div className={styles.frame9}>
              <div className={styles.div1}>0</div>
            </div>
            <img
              className={styles.nounEye15457301Icon}
              alt=""
              src="/nouneye1545730-11@2x.png"
            />
            <div className={styles.frame10}>
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

export default SouthBoundPage;
