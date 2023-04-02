const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}
loadUser();

const displayUser = (data) => {
    console.log(data.results[0]);
}