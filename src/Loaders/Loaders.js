const jobsLoaders = async () => {
    const loadedJobs = await fetch('jobs.json');
    const jobs = await loadedJobs.json();
    return jobs;
}

export default jobsLoaders; 