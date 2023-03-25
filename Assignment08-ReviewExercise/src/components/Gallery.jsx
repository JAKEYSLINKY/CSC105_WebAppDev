function Gallery(props) {
	return(
		<div>
			<h2>{props.name}</h2>
			<ul>
				<li><img src='https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg' width={200}/></li>
				<li><img src='https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg' width={200}/></li>
				<li><img src='https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg' width={200}/></li>
			</ul>
		</div>
	)
}
export default Gallery
