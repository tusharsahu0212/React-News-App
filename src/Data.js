let data;

let getData = async () => {

    let response;
    try {
        response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API}`);
    } catch (error) {
        alert(error);
    }


    data = await response.json();

}

await getData();

export default data;