import './Home.css'
import{Link} from 'react-router-dom'
import Button from './Button';
import Card from './Card'
import Test from './Test';
function Home() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">MyWebsite</div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className="container">
                    <h1>Welcome to My Website</h1>
                    <p>This is a simple webpage with a navigation bar at the top. You can add more content here as needed.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur, libero nec vehicula posuere, justo nulla consequat sapien, non cursus justo est sed mauris.</p>
                </div>
            </main>

            <Card title="First Card" />
            <Test />
        </>
    );


    
}

export default Home