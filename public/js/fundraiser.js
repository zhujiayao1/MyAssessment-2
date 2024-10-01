function getQueryParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
  }

  const id = getQueryParam('fid');
  console.log(id);

  function fetchDataAndPopulateForm() {
    fetch('http://localhost:3000/fundraiser/'+id)
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

                    
                    <label for="organizer">Organizer:</label>
                    <label>${item.ORGANIZER}</label><br>
                    
                    <label for="caption">Caption:</label>
                    <label>${item.CAPTION}</label><br>
                    
                    <label for="target">Target Funding:</label>
                    <label>${item.TARGET_FUNDING}</label><br>

                    <label for="current">Current Funding:</label>
                    <label>${item.CURRENT_FUNDING}</label><br>

                    <label for="city">City:</label>
                    <label>${item.CITY}</label><br>

                    <label for="category">Category:</label>
                    <a href="/search?category=${item.CATEGORY_NAME}" class="category-link">${item.CATEGORY_NAME}</a><br><br><br>

                    <hr class="separator">
                   
                
                `;
                document.getElementById('forms-container').appendChild(form);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation: ', error);
        });
    }
    
    document.addEventListener('DOMContentLoaded', fetchDataAndPopulateForm);