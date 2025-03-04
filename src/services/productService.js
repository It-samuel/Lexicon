export async function getProductList(searchTerm) {
    const url = searchTerm
          ? `http://localhost:3000/products?name_like=${searchTerm}`
          : `http://localhost:3000/444/products`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
     return data
    
}

export async function getProduct(id) {
    const response = await fetch(`http://localhost:3000/444/products/${id}`);
    const data = await response.json()
    return data
    
}
export async function getFeaturedList() {
    const response = await fetch("http://localhost:3000/444/featured_products");
      const data = await response.json()
      return data;
    
}