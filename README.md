
# Lexicon Project 📚🚀

Welcome to the **Lexicon Project**! This full-stack e-commerce web application provides a seamless shopping experience for users looking to browse, purchase, and manage their favorite tech books. 

## Features

- **User Authentication**: Secure login, registration, and logout functionality.  
- **Guest Login**: Users can explore the platform without creating an account.  
- **Product Catalog**: Browse a wide range of tech books with detailed descriptions.  
- **Search & Filtering**: Easily find books using search, categories, and filters.  
- **Shopping Cart**: Add, remove, and update items before checkout.  
- **Secure Checkout**: Integrated payment gateway for smooth transactions.  
- **Order Management**: View order history, track shipments, and manage purchases.  
- **Wishlist**: Save favorite books for future purchases.  
- **User Dashboard**: Manage profile, order history, and saved items.  
- **Admin Panel**: Add, edit, and manage books, orders, and users.  
- **Responsive Design**: Optimized for mobile, tablet, and desktop.  
- **Reviews & Ratings**: Users can leave feedback and rate books.  
- **Dark Mode**: Switch between light and dark themes for better usability.  

## Tech Stack  

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**:hosted on Azure App Service  
- **Authentication**: JWT-based authentication    
- **Hosting**: Azure App Service (Frontend & Backend)  
- **Storage**: Azure Blob Storage for book images and assets  

## Architecture  

Below is the high-level architecture of the **Lexicon Project**, showcasing how different components interact:  

![Lexicon Project Architecture](./docs/architecture-diagram.png)  

### **Architecture Overview**  
1. **Frontend (React, Tailwind CSS)**
   - Hosted on **Azure App Service**  
   - Communicates with backend via **REST APIs**  

2. **Backend (Node.js, Express.js)**
   - Also hosted on **Azure App Service**  
   - Handles authentication, orders, and API endpoints  

3. **Database (MongoDB on Azure Cosmos DB)**
   - Stores users, books, orders, and cart details  

4. **Storage (Azure Blob Storage)**
   - Stores book images and other media assets  

5. **Payment Gateway (Stripe or PayPal)**
   - Secure checkout integration  

## Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/lexicon-project.git
   cd lexicon-project
   ```

2. Install dependencies:  
   ```sh
   npm install
   ```

3. Start the development server:  
   ```sh
   npm start
   ```

4. Navigate to `http://localhost:3000` in your browser.  

## Deployment on Azure  

### **Frontend Deployment**  
1. Build the project:  
   ```sh
   npm run build
   ```
2. Deploy to Azure App Service using the Azure CLI:  
   ```sh
   az webapp up --name lexicon-frontend --resource-group your-resource-group
   ```

### **Backend Deployment**  
1. Set up the environment variables in Azure App Service  
2. Deploy using the Azure CLI:  
   ```sh
   az webapp up --name lexicon-backend --resource-group your-resource-group
   ```

## Contributing  

Contributions are welcome! Feel free to fork the repo, open an issue, or submit a pull request.  

## License  

This project is licensed under the MIT License.  

---

🚀 Happy coding! If you find this project useful, don't forget to ⭐ star the repository!
```
