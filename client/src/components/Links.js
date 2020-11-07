import React from "react"

function Links() {
	return (
		<div class="tm-container">
			<nav class="tm-black-bg tm-drinks-nav">
				<ul>
					<li>
						<a href="#" class="tm-tab-link active" data-id="cold">
							Iced Coffee
						</a>
					</li>
					<li>
						<a href="#" class="tm-tab-link" data-id="hot">
							Hot Coffee
						</a>
					</li>
					<li>
						<a href="#" class="tm-tab-link" data-id="juice">
							Fruit Juice
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Links
