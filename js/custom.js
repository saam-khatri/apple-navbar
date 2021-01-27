// search expand
	let search = document.querySelector('.item-search');
	let nav_link = document.getElementsByClassName('nav-link');
	let form = document.querySelector('form');
	search.onclick = ()=>{
		search.classList.toggle('active');
		form.classList.toggle('show');
		for(let i of nav_link){
			i.classList.toggle('expand');
		}
	}
	// Image change 
	let section = document.querySelector('section');
	let single_color = document.querySelector('.color').children;
	let image = document.querySelector('img');
	for(let i=0; i<single_color.length; i++)
	{
		single_color[i].onclick = e=>{
			let n = 0;
			while(n<single_color.length)
			{
				single_color[n++].className = '';
			}
			e.target.className = 'active';
			section.className = '';
			image.src = '';
			if(e.target == single_color[0]){
				section.classList.add('Graphite');
				image.src = "image/apple-brown.png"
			}
			if(e.target == single_color[1]){
				section.classList.add('Silver');
				image.src = "image/apple-white.png"
			}
			if(e.target == single_color[2]){
				section.classList.add('Pacific-blue');
				image.src = "image/apple-blue.png"
			}
			if(e.target == single_color[3]){
				section.classList.add('Gold');
				image.src = "image/apple-gold.png"
			}
		}
	}
	// Add-Cart Item
	let add_cart = document.querySelector('.add-cart');
	let bag = document.querySelector('.shopping-bag');
	add_cart.onclick = ()=>{
		const n = Number(bag.getAttribute('data-count') || 0);
		bag.setAttribute('data-count', n + 1);
		bag.classList.add('item-in-box');
		if (n>=1)
		 {
		 	confirm("This iPhone is already in your cart");
		 	bag.setAttribute('data-count', 1);
		 }

	}