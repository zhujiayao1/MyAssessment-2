    function fetchDataAndPopulateForm() {
        fetch('http://localhost:3000/fundraisers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                data.forEach(item => {
                    // create form
                    const form = document.createElement('form');
                    form.innerHTML = `
                        <div class="result">
                            <img src="img/2.jpg" alt="Image 2">
                            <div class="text"> 
                                <label for="organizer">organizer:</label>
                                <label>${item.ORGANIZER}</label><br>
                                
                                <label for="caption">caption:</label>
                                <label>${item.CAPTION}</label><br>
                                
                                <label for="target">target funding:</label>
                                <label>${item.TARGET_FUNDING}</label><br>

                                <label for="current">current funding:</label>
                                <label>${item.CURRENT_FUNDING}</label><br>

                                <label for="city">city:</label>
                                <label>${item.CITY}</label><br>

                                <label for="category">category:</label>
                                <a href="/search?category=${item.CATEGORY_NAME}" class="category-link">${item.CATEGORY_NAME}</a><br><br><br>

                                <hr class="separator">
                            </div>
                        </div>
                    
                    `;
                    document.getElementById('forms-container').appendChild(form);
                });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error);
            });
        }
        
		document.addEventListener('DOMContentLoaded', fetchDataAndPopulateForm);