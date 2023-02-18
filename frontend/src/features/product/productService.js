import axios from "axios";
const baseUrl = "http://localhost:4000/api"

const allProducts = async () => {
    try {
        const result = await axios.get(`${baseUrl}/product/all`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}

const allCategory = async () => {
    try {
        const result = await axios.get(`${baseUrl}/category/all`)

        return result.data
    } catch (error) {
        console.log(error);
    }
}

const allBrands = async () => {
    try {
        const brands = await axios.get(`${baseUrl}/brand/all`)
        return brands.data;
    } catch (error) {
        console.log(error);
    }
}



const ProductService = { allProducts, allCategory, allBrands }

export default ProductService