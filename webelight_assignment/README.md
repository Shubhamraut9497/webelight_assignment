
<body>
  <h1>Webelight Assignment</h1>

  <h2>Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB</li>
    <li>React (Frontend)</li>
    <li>HTML/CSS/JavaScript</li>
  </ul>

  <h2>Description</h2>
  <p>
    This is a web application developed for Webelight. The project includes a backend built with Node.js and Express,
    which communicates with a MongoDB database. The frontend is implemented using React, HTML, CSS, and JavaScript.
    The application allows users to add products, manage their cart, and apply filters based on product categories.
  </p>

  <h2>Functionality</h2>
  <ul>
    <li>
      <strong>User Authentication:</strong>
      The application uses local storage for user authentication. Users can log in and log out of their accounts.
    </li>
    <li>
      <strong>Add Products:</strong>
      Users can add products to the application's database. Each product includes details like name, description, price, and category.
    </li>
    <li>
      <strong>Cart Management:</strong>
      Users can add products to their cart and proceed to the cart page. In the cart, they have the option to either "Add to Cart" or "Buy Now" for each product.
    </li>
    <li>
      <strong>Filter by Category:</strong>
      The application provides the functionality to filter products based on different categories, making it easier for users to find products of interest.
    </li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/yourusername/webelight-assignment.git</code></pre>

    <li>Install dependencies:</li>
    <pre><code>cd webelight-assignment
npm install</code></pre>

    <li>Start the backend server:</li>
    <pre><code>npm run start-server</code></pre>

    <li>Start the frontend development server:</li>
    <pre><code>npm start</code></pre>

    <li>The application should now be accessible at <code>http://localhost:3000</code> in your browser.</li>
  </ol>

  <h2>API Endpoints</h2>
  <ul>
    <li><code>GET /api/products</code>: Get all products from the database.</li>
    <li><code>POST /api/products</code>: Add a new product to the database.</li>
    <li><code>GET /api/products/:id</code>: Get a specific product by its ID.</li>
    <li><code>PUT /api/products/:id</code>: Update a product's details by its ID.</li>
    <li><code>DELETE /api/products/:id</code>: Delete a product by its ID.</li>
  </ul>

  <h2>Contribution</h2>
  <p>
    Contributions to the project are welcome. If you find any issues or have ideas for improvements, please feel free to open an issue or submit a pull request.
  </p>

  <h2>License</h2>
  <p>
    This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.
  </p>
</body>

