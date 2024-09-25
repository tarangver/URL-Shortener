document.getElementById('urlForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const longUrl = document.getElementById('longUrl').value;
    
    const response = await fetch('shortener.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ longUrl })
    });

    const result = await response.json();
    
    if (result.shortUrl) {
        addUrlToHistory(result.longUrl, result.shortUrl);
    }
    
    document.getElementById('result').innerHTML = `Shortened URL: <a href="${result.shortUrl}" target="_blank">${result.shortUrl}</a>`;
});

// Function to add a new URL to the history table
function addUrlToHistory(longUrl, shortUrl) {
    const table = document.getElementById('urlHistoryTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Long URL column
    const longUrlCell = newRow.insertCell(0);
    longUrlCell.textContent = longUrl;

    // Short URL column
    const shortUrlCell = newRow.insertCell(1);
    const shortLink = document.createElement('a');
    shortLink.href = shortUrl;
    shortLink.textContent = shortUrl;
    shortLink.target = '_blank';
    shortUrlCell.appendChild(shortLink);

    // Actions column (Copy & Delete)
    const actionsCell = newRow.insertCell(2);
    
    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.classList.add('copy-btn');
    copyBtn.innerHTML = '📋'; // Unicode for clipboard icon
    copyBtn.onclick = () => copyToClipboard(shortUrl);
    actionsCell.appendChild(copyBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '🗑️'; // Unicode for trash icon
    deleteBtn.onclick = () => deleteUrl(newRow, shortUrl);
    actionsCell.appendChild(deleteBtn);
}

// Function to copy the short URL to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Short URL copied to clipboard!');
}

// Function to delete a row from the table and remove from the database
async function deleteUrl(row, shortUrl) {
    const confirmation = confirm('Are you sure you want to delete this URL?');
    if (confirmation) {
        const response = await fetch('shortener.php', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shortUrl })
        });
        
        const result = await response.json();
        if (result.success) {
            row.remove();
            alert('URL deleted successfully!');
        } else {
            alert('Failed to delete the URL.');
        }
    }
}
