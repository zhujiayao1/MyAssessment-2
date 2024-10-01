//clear boxes	
function clearChechboxes() {
    document.getElementById('category').value = '';
    document.getElementById('organizer').value = '';
    document.getElementById('city').value = '';
}

function onClick_Search() {
    var organizer = document.getElementById('organizer').value;
    var city = document.getElementById('city').value;
    var category = document.getElementById('category').value;
    
    // Check if at least one field is filled
    if (!organizer && !city && !category) {
        alert('You must select at least one search criteria.');
        return;
    }

    // Construct the query string
    var queryString = '?';
    if (organizer) queryString += 'organizer=' + encodeURIComponent(organizer) + '&';
    if (city) queryString += 'city=' + encodeURIComponent(city) + '&';
    if (category) queryString += 'category=' + encodeURIComponent(category);
    
    // Remove the last '&' if it exists
    if (queryString.endsWith('&')) {
        queryString = queryString.slice(0, -1);
    }

    fetch('/search' + queryString)
        .then(response => response.json())
        .then(data => {
        if (data.length === 0) {
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('results').innerHTML = '';
        } else {
            document.getElementById('error-message').style.display = 'none';
            displayResults(data);
        }
        })
        .catch(error => console.error('Error:', error));
}


function displayResults(data) {
    
    data.forEach(item => {
        const form = document.createElement('form');
        form.innerHTML = `
            <div class="result">
                <div class="text"> 
                    <label for="organizer">organizer:</label>
                    <a href="/fundraiser_page?fid=${item.FUNDRAISER_ID}">${item.ORGANIZER}</a><br>
                    
                    <label for="caption">caption:</label>
                    <label>${item.CAPTION}</label><br>
                    
                    <label for="target">target funding:</label>
                    <label>${item.TARGET_FUNDING}</label><br>

                    <label for="current">current funding:</label>
                    <label>${item.CURRENT_FUNDING}</label><br>

                    <label for="city">city:</label>
                    <label>${item.CITY}</label><br>

                    <label for="category">category:</label>
                    <a href="/search?category=${item.CATEGORY_NAME}">${item.CATEGORY_NAME}</a><br><br><br>

                    <hr class="separator">
                </div>
            </div>
        
        `;
        document.getElementById('forms-container').appendChild(form);
    });
 }