import React from "react"



function List() {
	return (

  <div class="tm-right">
      <main class="tm-main">
        <div id="drink" class="tm-page-content">

            <nav class="tm-black-bg tm-drinks-nav">
              <ul>
                <li>
                  <a class="tm-tab-link active" data-id="cold">Iced Coffee</a>
                </li>
                <li>
                  <a  class="tm-tab-link" data-id="hot">Hot Coffee</a>
                </li>
                <li>
                  <a  class="tm-tab-link" data-id="juice">Fruit Juice</a>
                </li>
              </ul>
            </nav>

            <div id="cold" class="tm-tab-content">
              <div class="tm-list">
                <div class="tm-list-item">          
                  <img src="img/iced-americano.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Iced Americano<span class="tm-list-item-price">$10.25</span></h3>
                    <p class="tm-list-item-description">Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.</p>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </main>

  </div>

           ) };

export default List


