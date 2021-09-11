import Nav from '../../Components/Nav/NavBar'
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="blogs-overall-container">
            <Nav />
            <div className="blogs-container">
                <div className="blogs-title-container">
                    <h1 className="blogs-title">BLOGS</h1>
                </div>
                <div className='card-container'>
                    <div className="card">
                        <div className="card-title-container">
                            <h2 className="card-title"></h2>
                            <a className="card-link"
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>READ</button>
                            </a>
                        </div>
                        <div className="card-image-container">
                            <img className="card-image" src='' alt='blog image' />
                        </div>
                        <div className="card-date-container">
                            <h3 className="card-date"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;