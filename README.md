# Pax8 Technical-Challenge


1.	For any CSS work, use bootstrap, the custom.css file, or however else you see appropriate
2.	There are helper methods in Helper angular service
3.	Data calls are in MyApis and you can see the data structures that will be returned
4.	2 second timeouts are used to simulate delays in getting the data
5.	Get through what you can in the time you have


###Requirements from the Business

1. Want to add a select field above the filter text input to show list of partners. Selecting a partner should filter the list of product links on the left.
2. When changing the selected partner in the sidebar, make sure to clear out any text the user may have typed in the filter text input field
3. Need to help the user know when there is an API call in process when loading products and partners. Show a simple “loading message.”
4. When you select a product from the sidebar, the data shows up in the product detail area. There needs to be a way to clear the selected product.
5. Some products require another product. If they do, then in the product detail area show a visual cue that “This product requires ‘Product Whatever’-Name”
6. For some reason, the product images are not showing up in the product detail area
7. For some reason, clicking buy product link is throwing an error. Just get it not to throw the error. Angular routing isn’t set up, so it won’t actually load a new page.
8. General polish all around the page
	- Add some space to top of sidebar to be flush with product detail header
	- Extend search filter input field the full width of the sidebar
	- Add separation to the input fields in sidebar
	- Give each product link in sidebar more area to click
	- The product image in product detail area is a bit large.
	- Anything else you think would be nice
