const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// loadCategorisbutton
const loadCategoriesbutton = (categoryName, btnElement) => {
  //   alert(num);
  const allButtons = document.querySelectorAll(".category-btn");
  allButtons.forEach((btn) =>
    btn.classList.remove("bg-[#9ee2e3]")
  );

  // Add active class to the clicked button
  btnElement.classList.add("bg-[#9ee2e3]");

  fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  )
    .then((res) => res.json())
    .then((data) => displayCard(data.data))
    .catch((error) => console.log(error));
};



const displayCategories = (items) => {
  const buttonContainer = document.getElementById("categories");
  buttonContainer.innerHTML = ""; // clear previous buttons if any
  items.forEach((item) => {
    const button = document.createElement("div");
    button.innerHTML = `
      <button 
        onclick="loadCategoriesbutton('${item.category.toLowerCase()}', this)" 
        class="btn category-btn rounded-full py-3 px-5">
        <img class="w-5 h-5" src="${item.category_icon}" /> ${item.category}
      </button>
    `;
    buttonContainer.appendChild(button);
  });
};



/* // display categories
const displayCategories = (items) => {
  const buttonContainer = document.getElementById("categories");
  items.forEach((item) => {
    const button = document.createElement("div");
    button.innerHTML = `
        <button onclick="loadCategoriesbutton('${item.category.toLowerCase()}')" class="btn category-btn rounded-full py-3 px-5"><img class="w-5 h-5" src="${
      item.category_icon
    }"/> ${item.category}</button>
        `;
    buttonContainer.appendChild(button);
  });
}; */

// load card
const loadCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayCard(data.pets))
    .catch((error) => console.log(error));
};

/* 
{
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
}
*/

// diplay card
const displayCard = (pets) => {
  const petCard = document.getElementById("card");
  petCard.innerHTML = "";

  if (pets.length === 0) {
    petCard.classList.remove("grid");
    petCard.innerHTML = `  
    <div class="flex flex-col min-h-[300px] gap-5  justify-center items-center ">
    <img  src="images/Icon.png" />
    <p>No coontent in this Category</p>
    </div>
    `;
  } else {
    petCard.classList.add("grid");
  }

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList = " bg-base-100 px-5 py-3 rounded-md shadow-sm  ";
    card.innerHTML = `
     <figure">
    <img class="rounded-md"
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="py-3">
    <h2 class="card-title font-bold">${pet.pet_name}</h2>
    <p class="py-1 flex items-center gap-2 text-[14px]"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=78291&format=png" />Breed : ${pet.breed}</p>

    <p class="py-1 flex items-center gap-2 text-[14px]"><img class="w-4 h-4" src="https://img.icons8.com/?size=80&id=58409&format=png" />Birth : ${pet.date_of_birth}</p>
    <p class="py-1 flex items-center gap-1 text-[14px]"><img class="w-5 h-5" src="https://img.icons8.com/?size=80&id=70834&format=png" />Gender : ${pet.gender}</p>

    <p class="py-1 flex items-center gap-1 text-[14px]"><img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=0pVwACd7biaT&format=gif" />Price : ${pet.price}$</p>

    <hr class="text-gray-200 py-2">

    <div class="flex justify-between gap-3 ">
    <button class="btn"><img src="https://img.icons8.com/?size=24&id=1RhDVJo6n7La&format=gif" /></button>
    <button class="btn">Adopt</button>
    <button class="btn">Details</button>
    </div>
  </div>
     `;
    petCard.appendChild(card);
  });
};

loadCategories();
loadCard();
