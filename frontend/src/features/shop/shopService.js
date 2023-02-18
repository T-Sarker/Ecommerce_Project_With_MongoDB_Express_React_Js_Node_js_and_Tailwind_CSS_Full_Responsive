import axios from "axios";
const baseUrl = "http://localhost:4000/api"
const filteredProducts = async (filterData) => {
    try {
        console.log(filterData.category);
        console.log(filterData.brand);
        console.log(filterData.price);
        const result = await axios.get(`${baseUrl}/product/filter/${filterData.category}/${filterData.brand}/${filterData.price}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}


const ShopService = { filteredProducts }

export default ShopService