import NavBar from '../Components/NavBar.js';
import '../Page Style/GallerypageCSS.css';

const Gallerypage = () => {
    return (  
        <div className="GalleryContainer">
        <NavBar/>
        <div className="Page-Header">
                <div className="Page-Title">Gallery</div>
            </div>
        <div className="divider"/>
        <div className='gallery-container'>
            <img
                className="n-1-icon1"
                alt=""
                src="/frontBus.png"
            />
            <img
                className="n-1-icon2"
                alt=""
                src="/LongBus.png"
            />    
        </div>
        <div className='gallery-container-2'>
            <img
                className="n-2-icon2"
                alt=""
                src="/293291856-139674542034971-4934941751606136058-n-2@2x.png"
            />
             <img
                className="n-1-icon3"
                alt=""
                src="/308491411-143526225050367-6456202852737359592-n-1@2x.png"
            />
        </div>
        <div className='gallery-container-3'>
            <img
                className="n-1-icon4"
                alt=""
                src="/308788445-143526235050366-1782930930114152047-n-1@2x.png"
            />
            <img
                className="n-1-icon5"
                alt=""
                src="/298917802-146104501391975-3855619148154011541-n-1@2x.png"
            />
        </div>
    </div>
    );
}
 
export default Gallerypage;