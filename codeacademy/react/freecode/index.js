/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function Header() {
    // returns the header
    return (
        <header>
            <nav className="nav">
            <img  src="./IGNOZ.png" className ="nav-img"/>
            <ul className="nav-items"> 
                <li >Pricing</li>
                <li >About</li>
                <li >Contact</li>
            </ul>
            </nav>
        </header>
    );
}


function MainContent() {
    return (
        <div className="Main_content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer  className="footer">
            <small>© 2023 Arete development. All rights reserved.</small>
        </footer>
    )
}


function Page() {
    return (
        <div className="page-wrapper">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))



