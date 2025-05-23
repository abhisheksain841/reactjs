import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" style={styles.header}>
      <nav>
        <ul className="nav-list" style={styles.navList}>
          <li style={styles.navItem}>
            <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
            >
              Home
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink 
              to="/about" 
              style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
            >
              About
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
            >
              Contact
            </NavLink>
          </li>

          <li style={styles.navItem}>
            <NavLink 
              to="/product" 
              style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
            >
              Products
            </NavLink>
          </li>
           
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    padding: '0.5rem 0',
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  activeLink: {
    backgroundColor: '#3498db',
    color: 'white',
  },
};

// Add hover effect (can't be in inline styles, so we'll add it here)
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .nav-list a:hover {
      background-color: rgba(52, 152, 219, 0.3);
      transform: translateY(-2px);
    }
    .nav-list a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: #3498db;
      transition: all 0.3s ease;
    }
    .nav-list a:hover::after {
      width: 80%;
      left: 10%;
    }
  </style>
`);