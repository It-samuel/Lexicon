export async function getProductList(searchTerm) {
    const url = searchTerm
          ? `${process.env.REACT_APP_HOST}/products?name_like=${searchTerm}`
          : `${process.env.REACT_APP_HOST}/products`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
     return data
    
}

export async function getProduct(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
    const data = await response.json()
    return data
    
}
export async function getFeaturedList() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
      const data = await response.json()
      return data;
    
}