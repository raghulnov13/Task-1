import './Header.css';

function Header() {
    return (
        <div className = 'navbar' > 
            <h1>All Categories</h1>
            <div className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div >
    )
    
    
}

export default Header;