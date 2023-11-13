# Recipe Search App

Welcome to the Recipe Search App! This application allows you to find the best recipes from across the web based on your search input.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   Navigate to the project directory:
   ```

cd recipe-search-app

### Install dependencies:

npm install

### Start the development server:

npm start
Open your browser and go to http://localhost:3000 to view the application.

## Usage

Enter your desired food item or ingredient in the search bar.
Click the "Search" button to find the best recipes.
Explore the displayed recipes and click "See More" to view detailed information about a specific recipe.
Leave comments about the ingredients and interact with existing comments.

### Components

#### Input Component

The Input component handles user input and triggers the recipe search.

#### Fetchdata Component

The Fetchdata component fetches recipe data from the Edamam API based on the user's input.

#### Displayrecipe Component

The Displayrecipe component displays a list of recipes and allows users to view more details.

#### Itemdetail Component

The Itemdetail component shows detailed information about a selected recipe, including ingredients and user comments.

### Technologies Used

React, Axios, Edamam API
