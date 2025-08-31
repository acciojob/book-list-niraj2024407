//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function() {
      // Get input values
      const title = document.getElementById("title").value.trim();
      const author = document.getElementById("author").value.trim();
      const isbn = document.getElementById("isbn").value.trim();

      if(title === "" || author === "" || isbn === "") {
        alert("Please fill all fields!");
        return;
      }

      // Get table body
      const list = document.getElementById("book-list");

      // Create a new row
      const row = document.createElement("tr");

      // Insert columns
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete-btn">X</button></td>
      `;

      // Append row to table
      list.appendChild(row);

      // Clear inputs
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";

      // Delete button functionality
      row.querySelector(".delete-btn").addEventListener("click", function() {
        row.remove();
      });
    });