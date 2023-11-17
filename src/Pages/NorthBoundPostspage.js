import Nav from '../Components/NavBar';
import '../Page Style/NorthBoundPostspageCSS.css';

const NorthBoundPosts = () => {
  const onDots1IconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.northBoundPosts}>
      <div className={styles.frame}>
        <div className={styles.writeACommentWrapper}>
          <div className={styles.writeAComment}>Write a comment....</div>
        </div>
      </div>
      <div className={styles.frame1}>
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
          <div className={styles.northBoundRoute}>North Bound Route Post</div>
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
        <div className={styles.categories}>Categories</div>
        <img
          className={styles.magnifyGlassIcon}
          alt=""
          src="/magnify-glass@2x.png"
        />
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.button1}>
            <div className={styles.login}>Comment</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.login}>Edit Post</div>
          </div>
          <div className={styles.edited0d}>Edited: 0d</div>
          <div className={styles.firstNameLast}>First Name Last Name</div>
          <img className={styles.user21} alt="" src="/user-2-1@2x.png" />
          <div className={styles.northBoundTo}>North Bound to Place</div>
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.frame5} data-scroll-to="frameContainer">
          <div className={styles.frameParent}>
            <div className={styles.frame6}>
              <img
                className={styles.nounEye15457301Icon}
                alt=""
                src="/nouneye1545730-11@2x.png"
              />
              <div className={styles.views}>0 Views</div>
            </div>
            <div className={styles.frame7}>
              <img
                className={styles.comment22}
                alt=""
                src="/comment-2-1@2x.png"
              />
              <div className={styles.comments}>0 Comments</div>
            </div>
          </div>
          <div className={styles.like}>Like</div>
          <div className={styles.share}>Share</div>
          <img className={styles.like11} alt="" src="/like-1-1@2x.png" />
          <div className={styles.thisIsYourContainer}>
            <p
              className={styles.thisIsYour}
            >{`This is your forum post. Use this space to connect with your audience in a way `}</p>
            <p
              className={styles.thisIsYour}
            >{`that’s current and interesting. Post relevant information that will encourage `}</p>
            <p
              className={styles.thisIsYour}
            >{`discussion and collaboration. With full freedom to edit posts, as well as add `}</p>
            <p className={styles.thisIsYour}>
              stunning media, managing your forum has never been easier.
            </p>
          </div>
          <img className={styles.share1Icon} alt="" src="/share-1@2x.png" />
          <div className={styles.dislike}>Dislike</div>
          <img className={styles.like12} alt="" src="/like-1-2@2x.png" />
        </div>
      </div>
      <div className={styles.frame8}>
        <div className={styles.frame9}>
          <div className={styles.comments0}>Comments (0)</div>
          <img className={styles.user22} alt="" src="/user-2-1@2x.png" />
        </div>
      </div>
      <img
        className={styles.dots1Icon}
        alt=""
        src="/dots-1@2x.png"
        onClick={onDots1IconClick}
      />
      <div className={styles.divider1} />
    </div>
  );
};

export default NorthBoundPosts;
