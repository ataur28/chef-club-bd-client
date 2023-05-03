import { getShoppingCart } from "../utilities/fakedb";

const jobsLoader = async() =>{
    const loadedJobs = await fetch('/jobFeature.json');
    const jobs = await loadedJobs.json();

    const storedJobs = getShoppingCart();
    const saveJob = [];
    // console.log(storedJobs)

    for(const id in storedJobs){
        const addedJobs = jobs.find(job => job.id == id);
        if(addedJobs){
            const quantity = storedJobs[id];
            addedJobs.quantity = quantity;
            saveJob.push(addedJobs);
        }
    }

    // console.log(jobs)
    return saveJob;

    

}
export default jobsLoader;