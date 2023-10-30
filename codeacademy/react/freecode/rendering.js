
function Header() {
    const ulStyle = {
        listStyleType: 'none',  // Remove the default bullet points
        display: 'flex',       // Make the <ul> inline
        padding: 2         // Remove default padding
    };

    const liStyle = {
        margin: '0 10px',      // Add margin to create space between <li> elements
    };
    // returns the header
    return (
        <header>
            <nav>
            <ul style={ulStyle}> 
                <li style={liStyle}>About</li>
                <li style={liStyle}>Contact</li>
                <li style={liStyle}>About Me</li>
            </ul>
            </nav>
        </header>
    );
}


function Body() {
    //returns the body
    return (
    <div>
        <h1>React Is Awesome</h1>
        <ol>
            <li>Creating App</li>
            <li>Making Products</li>
            <li>Its just fun</li>
        </ol>
    </div>
    );
}

function Footer() {
    //returns the footer
    return (
    <footer>
        @ 2023 Martin Development. All rights reserved.
    </footer>
    );
}

function Page() {
    //returns the Page
    return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>

    );
}



//renders everything in one div
ReactDOM.render(<Page />,document.getElementById("root"));
