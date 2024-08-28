function closeWish() {
	const Wish = document.querySelector('.producstOnWish');
	Wish.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopWish = document.querySelector('.wishlistButton');
openShopWish.addEventListener('click', () => {
	const Wish = document.querySelector('.producstOnWish');
	Wish.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopWish = document.querySelector('#');
const overlayy = document.querySelector('.overlay');
closeShopWish.addEventListener('click', closeWish);
overlayy.addEventListener('click', closeWish);


let productsInWishList = JSON.parse(localStorage.getItem('wishlist'));
if(!productsInWishList){
	productsInWishList = [];
}
const parentElement = document.querySelector('#wishItems');
const WishList = document.querySelector('#wishnum');
const wishproducts = document.querySelectorAll('.product-under');
const wishnumber = document.querySelector('.wishes');


const countTheWish = function () { // 4
	let wishes = 0;
	productsInWishList.forEach(wish => {
		wishes += items.count;
        
	});
	return wishes;
}



const updateWishlistHTML = function () {  // 3
	localStorage.setItem('wishlist', JSON.stringify(productsInWishList));
	if (productsInWishList.length > 0) {
		let result = productsInWishList.map(items => {
			return `
				<li class="Item">
					<img src="${items.image}">
					<div>
						<h5>${items.name}</h5>
						<h6>$${items.price}</h6>
						<div>
							<button class="button-minus" data-id=${items.id}>-</button>
							<span class="countOfProduct">${items.count}</span>
							<button class="button-plus" data-id=${items.id}>+</button>
						</div>
					</div>
				</li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		WishList.innerHTML = + countTheWish();

	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your Wish List is empty</h4>';
		WishListPrice.innerHTML = '';
	}
}

function updateProductsInWishList(items) { // 2
	for (let i = 0; i < productsInWishList.length; i++) {
		if (productsInWishList[i].id == items.id) {
			productsInWishList[i].count += 1;
			productsInWishList[i].price = productsInWishList[i].basePrice * productsInWishList[i].count;
			return;
		}
	}
	productsInWishList.push(items);
}

products.forEach(items => {   // 1
	items.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToWish')) {
			const productwishID = e.target.dataset.itemsId;
			const productwishName = items.querySelector('.productName').innerHTML;
			const productwishPrice = items.querySelector('.priceValue').innerHTML;
			const productwishImage = items.querySelector('img').src;
			let items = {
				name: productwishName,
				image: productwishImage,
				id: productwishID,
				count: 1,
				price: +productwishPrice,
				basePrice: +productwishPrice,
			}
			updateProductsInWishList(items);
			updateWishlistHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const PlusButton = e.target.classList.contains('button-plus');
	const MinusButton = e.target.classList.contains('button-minus');
	if (PlusButton || MinusButton) {
		for (let i = 0; i < productsInWishList.length; i++) {
			if (productsInWishList[i].id == e.target.dataset.id) {
				if (PlusButton) {
					productsInWishList[i].count += 1
				}
				else if (MinusButton) {
					productsInWishList[i].count -= 1
				}
				productsInWishList[i].price = productsInWishList[i].basePrice * productsInWishList[i].count;

			}
			if (productsInWishList[i].count <= 0) {
				productsInWishList.splice(i, 1);
			}
		}
		updateWishlistHTML();
	}
});

updateWishlistHTML();