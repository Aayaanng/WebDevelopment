const books = [
  "Aesthetic inspiration!",
  "Fun quizzes with friends!",
  "Catch up with the news!",
  "All makeup products!",
  "The best TV shows!",
  "Animal education",
  "The cutest puppies!",
  "Shop all home and food essentials!",
  "Catch up with all good movies!",
  "Our very own IYA!",
  "Get idea inspiration and knowledge!",
  "Web design",
  "AI imagery generator",
  "Organise your work with mindmaps!",
  "Make team work easier!",
  "Vegan Recipes!",
  "Latest fashion!",
];

books.forEach((book) => {
  const p = document.createElement("p");
  p.innerHTML = book;
  document.querySelector(".books-container").appendChild(p);
});

const search = () => {
  const searchString = document.querySelector("input").value;
  const filteredBooks = books.filter((book) => {
    if (book.includes(searchString)) {
      return true;
    } else {
      return false;
    }
  });

  document.querySelector(".books-container").innerHTML = "";
  filteredBooks.forEach((book) => {
    const p = document.createElement("p");
    p.innerHTML = book;
    document.querySelector(".books-container").appendChild(p);
  });
};
