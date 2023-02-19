const categoryRef  = document.querySelector('#categories');
console.log(`Number of categories: ${categoryRef.children.length}`);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item =>  {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count}`);
});