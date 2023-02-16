class Bookmark {
    constructor(webAddress, name){
        this.webAddress = webAddress; //taken from input field
        this.name = name;             //taken from input field
        this.bookMarkArray = [];      
console.log(this.bookMarkArray);
    }
    addBookmark(newBookMark){
        this.bookMarkArray.push(newBookMark)
    };

    render(){
        const bookmarks = document.querySelector('.bookmarks');
        const a = bookMark.bookMarkArray.map((element)=>{
            const aTag = document.createElement('a');
            aTag.href = `${this.bookMarkArray[element].webAddress}`;
            aTag.textContent = `${this.bookMarkArray[element].name}`;
        });
        // const aTag = document.createElement('a');
        // aTag.href = `${this.bookMarkArray[i].webAddress}`;
        // aTag.textContent = `${this.bookMarkArray[i].name}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'
        aTag.append(removeButton);
        bookmarks.appendChild(a); 

    }
}
const bookMark = new Bookmark();




const addButton = document.querySelector('.favoriteButton');
const userAddress = document.querySelector('#address');
const userName = document.querySelector('#name');

addButton.addEventListener('click', function(){
    const newBookMark = new Bookmark(`${userAddress.value}`, `${userName.value}`); 
    console.log(newBookMark);

    bookMark.addBookmark(newBookMark);
    bookMark.render();

});


