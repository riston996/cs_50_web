function App() {
    return (
        <>
        <Navbar />
        <Hero />
        </>  
    )
}

function Navbar() {
    return (
        <div className="navbar">
            <img src="./images/airbnb-logo.png" className="nav--icon" />
        </div>
    )
}

function Hero() {
    return (
        <div className="hero">
            <img src="./images/photo-grid.png" className="hero--icon" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))