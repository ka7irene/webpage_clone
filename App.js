import React from 'react';
import './App.css';

const Header = () => ( // Header component
        <header className="header">
            <h1>GialloZafferano</h1>
        </header>
    );

const NavBar = () => ( // Navigation bar component
  <nav className="navbar">
    <ul>
      <li><a href="#Appetizers">Home</a></li>
      <li><a href="#Pasta">Recipes</a></li>
      <li><a href="#Gnocchi">Gnocchi</a></li>
      <li><a href="#Pizzas and Foccaccias">Pizzas and Foccaccias</a></li>
      <li><a href="#Main Courses">Main courses</a></li>
      <li><a href="#Cakes and Baking">Cakes and Baking</a></li>
    </ul>
  </nav>
);

const Section = ({title}) => ( // Section component
  <section className="section">
    <h2>{title}</h2>
  </section>
);



const Content = ({ title, imageSrc }) => ( // Content component that holds the title and image of the component
  <div className="Content">
    {imageSrc && <img src={imageSrc} alt={title} className="content-image" />}
    <h2>{title}</h2>
  </div>
);


const SwipeContainer = ({ children }) => { // SwipeContainer providing a swipeable container for child elements
  const swiperRef = React.useRef(null);

  const slideLeft = () => { // component that lets the swiper move to the left
    if(swiperRef.current) {
      swiperRef.current.scrollBy({ left: -300, behavior: 'smooth'});
    }
};

  const slideRight = () => { // companent that lets the swiper move to the right
    if(swiperRef.current) {
      swiperRef.current.scrollBy({ left: 300, behavior: 'smooth'});
    }
  };

  return ( // calling components
    <div className="swiper-container">
      <button className="swiper-button left" onClick={slideLeft}>{"<"}</button>
      <div className="swiper-wrapper" ref={swiperRef}>
        {children}
      </div>
      <button className="swiper-button right" onClick={slideRight}>{">"}</button>
    </div>
  );
};


const Footer = () => ( // Footer component 
  <footer className="footer">
    <p>&copy; 2024 GialloZafferano</p>
    {/* renders element with external link to the GialloZafferano website */}
    <a href="https://www.giallozafferano.com/" target="_blank" rel="noopener noreferrer"> 
      Visit GialloZafferano
    </a>
  </footer>
);



function App() { // Main app component
  return ( // Incorporating all the components I made together to create the structure of the website 
    <div className="App">
      <Header />
      <SwipeContainer/>
      {/* content container used to keep recipes in one section */}
      <div className="content-container"> 
      <Content title="Paccheri Pasta with pomodorini and Tuna" imageSrc="https://www.giallozafferano.com/images/275-27573/Paccheri-Pasta-with-Pomodorini-and-Tuna_360x300.jpg"/>
      <Content title="Potato croquettes" imageSrc="https://www.giallozafferano.com/images/226-22694/potato-croquettes_360x300.jpg"/>
      <Content title="Chocolate and strawberry cake" imageSrc="https://www.giallozafferano.it/images/168-16841/Torta-cioccolato-e-fragole_780x520_wm.jpg?cb=f49ae3fe348660e8104e6b95ce815578b7c296c5" />
      </div> 
      <NavBar />
      <Section title="SPECIAL GUEST: GIADA DE LAURENTIIS"/>
      <div className="content-container">
      <Content  title="Paccheri Pasta with pomodorini and Tuna" imageSrc="https://www.giallozafferano.com/images/275-27573/Paccheri-Pasta-with-Pomodorini-and-Tuna_360x300.jpg"/>
      <Content title="Sicilian Potato Salad (Insalata Vastasa)" imageSrc="https://www.giallozafferano.com/images/275-27576/Sicilian-Potato-Salad-Insalata-Vastasa_360x300.jpg"/> 
      <Content title="Grilled Melon and Prosciutto Pasta Salad" imageSrc="https://www.giallozafferano.com/images/275-27577/Grilled-Melon-and-Prosciutto-Pasta-Salad_360x300.jpg"/>
      <Content title="Frutti di mare" imageSrc="https://www.giallozafferano.com/images/275-27569/Frutti-di-Mare_360x300.jpg" />
      </div>
      <Section title="MOST POPULAR:"/>
      <div className="content-container">
      <Content title="Spaghetti Amatriciana" imageSrc="https://www.giallozafferano.com/images/228-22817/Spaghetti-Amatriciana-Bacon-and-tomato-spaghetti_360x300.jpg"/>
      <Content title="Spaghetti Carbonara" imageSrc="https://www.giallozafferano.com/images/228-22819/Spaghetti-Carbonara-Bacon-and-egg-spaghetti_360x300.jpg"/>
      <Content title="Pasta alla gricia" imageSrc="https://www.giallozafferano.com/images/228-22820/pasta-alla-gricia-spaghetti-with-cured-pork-jowl_360x300.jpg"/>
      <Content title="Spaghetti Cacio e Pepe" imageSrc="https://www.giallozafferano.com/images/228-22822/Spaghetti-Cacio-e-Pepe-Pecorino-and-black-pepper-spaghetti_360x300.jpg"/>
      </div>
      <Section title="MOST RATED"/>
      <div className="content-container">
      <Content title="Spaghetti Carbonara" imageSrc="https://www.giallozafferano.com/images/228-22819/Spaghetti-Carbonara-Bacon-and-egg-spaghetti_360x300.jpg"/>
      <Content title="Pasta alla gricia" imageSrc="https://www.giallozafferano.com/images/228-22820/pasta-alla-gricia-spaghetti-with-cured-pork-jowl_360x300.jpg"/>
      <Content title="Ricotta Cheese Crostata" imageSrc="https://www.giallozafferano.com/images/226-22699/ricotta-cheese-crostata-tart_360x300.jpg"/>
      <Content title="Potato croquettes" imageSrc="https://www.giallozafferano.com/images/226-22694/potato-croquettes_360x300.jpg"/>
      </div>
      <Section title="SEBASTIAN FITARAU"/>
      <div className="content-container">
      <Content title="Seaweed Fritters" imageSrc="https://www.giallozafferano.com/images/276-27651/Seaweed-Fritters_360x300.jpg"/>
      <Content title="Braised Flank Steak with Mashed potatoes" imageSrc="https://www.giallozafferano.com/images/276-27647/Braised-Flank-Steak-with-Mashed-Potatoes_360x300.jpg"/>
      <Content title="Fregola with Clam and Bottarga" imageSrc="https://www.giallozafferano.com/images/275-27550/Fregola-with-Clams-and-Bottarga_360x300.jpg"/>
      <Content title="Lemon Meringue Pie" imageSrc="https://www.giallozafferano.com/images/275-27549/Lemon-Meringue-Pie_360x300.jpg"/>
      </div>
      <Section title="FOODQOOD"/>
      <div className="content-container">
      <Content title="Easy Turkey & Ham Cheese Fritters" imageSrc="https://www.giallozafferano.com/images/276-27653/Easy-Turkey-Ham-and-Cheese-Fritters_360x300.jpg"/>
      <Content title="Homemade Croissants" imageSrc="https://www.giallozafferano.com/images/276-27649/Homemade-Croissants_360x300.jpg"/>
      <Content title="Crispy Fried Lasagne" imageSrc="https://www.giallozafferano.com/images/276-27635/Crispy-Fried-Lasagna_360x300.jpg"/>
      <Content title="Paccheri with Asparagus and Pecorino" imageSrc="https://www.giallozafferano.com/images/275-27597/Paccheri-with-Asparagus-and-Pecorino_360x300.jpg"/>
      </div>
      <Section title="DESSERT"/>
      <div className="content-container">
      <Content title="Magic vanilla cake" imageSrc="https://www.giallozafferano.com/images/228-22840/Vanilla-magic-cake_360x300.jpg"/>
      <Content title="Torta tanerina (Moist chocolate cake)" imageSrc="https://www.giallozafferano.com/images/226-22690/torta-tenerina-moist-chocolate-cake_360x300.jpg"/>
      <Content title="Cannoli" imageSrc="https://www.giallozafferano.com/images/227-22770/cannoli_360x300.jpg"/>
      <Content title="Apricot Jam Tart" imageSrc="https://www.giallozafferano.com/images/227-22799/apricot-jam-crostata-tart_360x300.jpg"/>
      </div>
      <Section title="APPETIZERS"/>
      <div className="content-container">
      <Content title="Frittata (Egg-based dish)" imageSrc="https://www.giallozafferano.com/images/227-22746/frittata-egg-dish_360x300.jpg"/>
      <Content title="Focaccio (fugassa) alla genovese (Genoa-style foccaccia)" imageSrc="https://www.giallozafferano.com/images/229-22904/focaccia-fugassa-alla-genovese-genoa-style-focaccia_360x300.jpg"/>
      <Content title="Caponata (Eggplant salad)" imageSrc="https://www.giallozafferano.com/images/227-22754/caponata-eggplant-salad_360x300.jpg"/>
      <Content title="Taralli (Round breadsticks)" imageSrc="https://www.giallozafferano.com/images/227-22750/taralli-round-breadsticks_360x300.jpg"/>
      </div>
      <Section title="FIRST COURSES"/>
      <div className="content-container">
      <Content title="Homemade pasta (sheets and shapes)" imageSrc="https://www.giallozafferano.com/images/227-22727/homemade-pasta-sheets-and-shapes_360x300.jpg"/>
      <Content title="Seafood spaghetti" imageSrc="https://www.giallozafferano.com/images/227-22742/seafood-spaghetti_360x300.jpg"/>
      <Content title="Fettuccine pasta with octopus and porcini mushroom sauce" imageSrc="https://www.giallozafferano.com/images/227-22759/fettuccine-pasta-with-octopus-and-porcini-mushroom-sauce_360x300.jpg"/>
      <Content title="Pasta alla zozzona (Carbonara, Amatriciana and Cacio e Pepe" imageSrc="https://www.giallozafferano.com/images/229-22920/pasta-alla-zozzona-carbonara-amatriciana-and-cacio-e-pepe-pasta_360x300.jpg"/>
      </div>
      <Section title="MAIN COURSES"/>
      <div className="content-container">
      <Content title="Foil-baked sea Bream" imageSrc="https://www.giallozafferano.com/images/226-22684/foil-baked-sea-bream_360x300.jpg"/>
      <Content title="Lingurian-style stuffed zucchini" imageSrc="https://www.giallozafferano.com/images/227-22779/ligurian-style-stuffed-zucchini_360x300.jpg"/>
      <Content title="Zucchini Parmigiana" imageSrc="https://www.giallozafferano.com/images/227-22789/zucchini-parmesan_360x300.jpg"/>
      <Content title="Cotechino (Pork sausage) with lentils" imageSrc="https://www.giallozafferano.com/images/227-22760/cotechino-pork-sausage-with-lentils_360x300.jpg"/>
      </div>


      <Footer />
    </div>
  );
}

export default App;