import "./App.css";
import HomePage from "./pages/home/home.component";
import AboutPage from "./Components/about/about.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import { ScrollingProvider, Section } from "react-scroll-section";
import Footer from "./pages/footer/footer.component";
function App() {
	return (
		<div className='App'>
			<ScrollingProvider>
				<Section id='home'>
					<HomePage />
				</Section>
				<Section id='about'>
					<AboutPage />
				</Section>
				<Section id='portfolio'>
					<PortfolioPage />
				</Section>
			</ScrollingProvider>
		</div>
	);
}

export default App;
