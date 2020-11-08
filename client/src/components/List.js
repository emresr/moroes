import React,{Fragment,useState,useEffect} from "react"



const List= () =>  {

const [meals, setMeals]= useState([]);

  const getMeals = async () => {
    try {
      const response = await fetch("http://localhost:5000/meals");
      const jsonData = await response.json();
      setMeals(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

console.log(meals)

	return (

<Fragment>
  {" "}
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
               {meals.map(item => (
                <div key={meals.meal_id} class="tm-list-item">          
                  <img src="img/iced-americano.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">{meals.title}<span class="tm-list-item-price">$ {meals.price}</span></h3>
                    <p class="tm-list-item-description">{meals.description}</p>

                  </div>
                </div>
                 ))}
            </div>

            </div>
        </div>
      </main>

  </div>
</Fragment>
           ) };



export default List


