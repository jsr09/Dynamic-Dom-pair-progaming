const bookmarks = document.querySelector('.bookmarks');
const addButton = document.querySelector('.favoriteButton');
const userAddress = document.querySelector('#address');
const userName = document.querySelector('#name');

class Bookmark {
    constructor(webAddress, name){
        this.bookMarkArray = [];    
  
    }

    addBookmark(newWebsite){
        this.bookMarkArray.push(newWebsite);

    };

    render(){
        const a = bookMark.bookMarkArray.map((element,index)=>{
            const aTag = document.createElement('a');
            aTag.href = `${this.bookMarkArray[index].webAddress}`;
            aTag.textContent = `${this.bookMarkArray[index].name}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'

            aTag.append(removeButton);
            // bookmarks.removeChild(aTag);
            aTag.replaceWith(aTag)
            bookmarks.appendChild(aTag);

        });
    }
}

const bookMark = new Bookmark();

class Website{
    constructor(webAddress, name){
        this.webAddress = webAddress; //taken from input field
        this.name = name;             //taken from input field
    }
}


addButton.addEventListener('click', function(){
    let newWebsite = new Website(`${userAddress.value}`, `${userName.value}`); 
    bookMark.addBookmark(newWebsite);
    console.log(bookMark.bookMarkArray);
    bookMark.render();


});


//1)  If we replace something that doesn't exist how can we make sure our page will work on the  first run. (Conditional/Guard Clauses)

// 2) We are mapping through our array multiple times and rendering within our map. Instead we could use map to create the list element and use replace(child or children) passing in the new array