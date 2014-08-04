  
  var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2 Players",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
}



$(document).on('ready', function() {

	var templateSource = $('#entry-template').html();
		console.log('Games Store Inventory:', productsData.productsList);
// Compile a handlebars template
	var template = Handlebars.compile(templateSource);
	// Handlebars.compile takes in a string of HTML
	// and gives back a function
	console.log('MyTemplate:', template);
	for (var i = 0; i < productsData.productsList.length; i++) {
			// Run the template function with 
			// each item separately as a context
			$('#product-container').append( template( productsData.productsList[i] ) );
			// $('#product-container').append('<button class="add">Add Item to Wish List!</button>');

		};


	$('.add').click(function(){
		// console.log('add me');
		var wishFor = $(this).closest('.product').find('.title').text();
		console.log(wishFor)
		$('#wishlist-container').append(wishFor);

		// var wishlistSource = $('#wishlist-template').html()
		// var wishtemplate = Handlebars.compile(wishlistSource);


		// for (var i = 0; i < productsData.productsList.length; i++) {
		// 	// Run the template function with 
		// 	// each item separately as a context
		// 	// $('#wishlist-container').append('<h2>My Wishlist</h2>');
		// 	$('#wishlist-container').append( wishtemplate( productsData.productsList[i] ) );
		// 	// $('#wishlist-container').append('<button class="remove">Remove Item!</button>');
		// };

		$('.remove').click(function(){
		console.log('remove me')
		$(this).closest('.product').remove()
		// $('#wishlist-container').()
	})


	});
	

	// $('.remove').click(function(){
	// 	console.log('remove me')
	// 	$('#wishlist-container').remove()
	// })



});

	



