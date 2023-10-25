//JSX

/*

const nav = (
    <nav>
        <h1>IGNOZ</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(nav, document.getElementById("root"));


*/

const pag = (
    <div>
        <h1>Ignoz AI</h1>
        <h2>Serving Humanity Through Classrooms</h2>
        <ol>
            <li>interactive class</li>
            <li>data-driven training</li>
            <li>machine learning assisstance</li>
        </ol>
        <p>We bring the future to the classrooms revoluting education that drives innovation fuels the nations growth</p>
    </div>
);

const rootDiv = document.getElementById("root");
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element.';
const newDiv2 = document.createElement('div');
newDiv2.textContent = 'This is also a new div element.';
const h12 = document.createElement('h1');
h12.textContent = 'Ignoz AI.';
const h21 = document.createElement('h2');
h21.textContent = 'Serving Humanity Through Classrooms.';
const ol = document.createElement('ol');
const lis = document.createElement('li');
lis.textContent = 'interactive class';
const lis2 = document.createElement('li');
lis2.textContent = 'data-driven training';
const lis3 = document.createElement('li');
lis3.textContent = 'machine learning assisstance';
ol.appendChild(lis);
ol.appendChild(lis2);
ol.appendChild(lis3);
const p1 = document.createElement('p');
p1.textContent = 'We believe in living in the future, we believe technology is the only way for humanity to survie, we believe in dreams, we believe in the potential of every child. We will be using the most advanced technologiues not to bring in more money or provide algiorithms for controling eyeballs. We use it for betterment of society and our kids, we see each kid as an athelete, destined for challeges, we provide them training using the most advanced technology'
p1.style.color = 'red';
p1.style.fontSize = '16px';
p1.style.fontWeight = 'bold';
p1.style.textAlign = 'center';
const pd = document.createElement('div');
pd.style.width = '50%';
pd.style.margin = '0 auto';
pd.style.textAlign = 'center';

pd.appendChild(p1);


rootDiv.appendChild(newDiv);
rootDiv.appendChild(newDiv2);
rootDiv.appendChild(h12);
rootDiv.appendChild(h21);
rootDiv.appendChild(ol);
rootDiv.appendChild(pd);

