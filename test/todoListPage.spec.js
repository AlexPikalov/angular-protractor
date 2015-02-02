describe('e2e', function () {
	var ptor;
	var newItemInput;
	var todoItems;
	var addNewTodoButton;
	var todoItems;

	beforeEach(function () {
		browser.get('/src/');
    	ptor = protractor;
    	newItemInput = $('#new-todo');
    	todoItems = $$('.todo-item');
	});

	it('should load the home page', function () {
		expect(newItemInput.isDisplayed()).toBe(true);
	});

	it('should not contain todo items on start', function () {
		todoItems.then(function(items) {
			expect(items.length).toBe(0);
		});
	});

	describe('when add new item', function() {
		var newItemText = 'New Todo :)';
		var newTodoItem;

		beforeEach(function () {
			addNewTodoButton = $('#add-new-todo');
			newTodoItem = $('.todo-item:first-child');

			newItemInput.sendKeys(newItemText);
			addNewTodoButton.click();
		});

		it('should add new item to the list', function () {
			var todoItemTextEl = newTodoItem.element(by.css('.item-text'));
			expect(newTodoItem.isDisplayed()).toBe(true);
			expect(todoItemTextEl.getText()).toBe(newItemText)
		});

		// should fail
		it('should clean the input value', function () {
			expect(newItemInput.getAttribute('value')).toBe('');
		})
	});

	describe('when mark an item as `done`', function() {
		var newItemText = 'New Todo :)';
		var newTodoItem;

		beforeEach(function () {
			addNewTodoButton = $('#add-new-todo');
			newTodoItem = $('.todo-item:first-child');

			newItemInput.sendKeys(newItemText);
			addNewTodoButton.click();
			// mark as done
			newTodoItem.element(by.css('.item-done-button')).click();
		});

		it('should strikethrough the text', function () {
			var todoItemTextEl = newTodoItem.element(by.css('.item-text'));
			expect(newTodoItem.isDisplayed()).toBe(true);
			expect(todoItemTextEl.getCssValue('text-decoration')).toBe('line-through')
		});

		it('should hide `Done`-button', function () {
			var addButtonEl = newTodoItem.element(by.css('.item-done-button'));
			expect(addButtonEl.isDisplayed()).toBe(false);
		})
	});
});