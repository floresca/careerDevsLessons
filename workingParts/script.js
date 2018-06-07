
v1-AF Agile Week part 1 
 
 //add book-list
  const addForm = document.forms['add-book'];

  addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const ticker = document.createElement('div')
    const bookName = document.createElement('span');
    const status = document.createElement('div');
    const selectStatus = document.createElement('select');
    const optionPending = document.createElement('option');
    const optionSelected = document.createElement('option');
    const optionSold = document.createElement('option');
    const deleteBtn = document.createElement('span');

    //add content
    ticker.textContent = 'AMZN'; //This is static, needs API
    bookName.textContent = value;
    optionPending.textContent = 'Pending';
    deleteBtn.textContent = ' X ';
    optionSelected.textContent = 'Bought';
    optionSold.textContent = 'Sold';
    

    //add classes
    ticker.classList.add('stock');
    bookName.classList.add('name');
    status.classList.add('status-section', 'form-group');
    selectStatus.classList.add('form-control');
    optionSelected.selected = true;
    deleteBtn.classList.add('delete');
    

    //append to DOM
    
    selectStatus.appendChild(optionPending);
    selectStatus.appendChild(optionSelected);
    selectStatus.appendChild(optionSold);
    status.appendChild(selectStatus);
    
    
    //append ticker
    li.appendChild(ticker);
    //append bookname to li
    li.appendChild(bookName);
    //append delete button to li
    li.appendChild(deleteBtn);
    //append completed li to list
    li.appendChild(status);
    
    list.appendChild(li);
  });