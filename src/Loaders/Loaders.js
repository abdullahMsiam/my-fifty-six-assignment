import { getShoppingCart } from "../utilities/fakedb";

const jobsLoaders = async () => {
    const loadedJobs = await fetch('jobs.json');
    const jobs = await loadedJobs.json();
    // return jobs;
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = jobs.find(jb => jb.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // return savedCart;
    // return { jobs, savedCart };
    return { jobs, savedCart };
    // return jobs;
}

export default jobsLoaders; 