const mainCat = document.querySelectorAll('ul#categories li.item');
console.log("Number of categories:", mainCat.length);
mainCat.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    const subCat = element.querySelectorAll('ul li');
    console.log("Elements:", subCat.length);
});