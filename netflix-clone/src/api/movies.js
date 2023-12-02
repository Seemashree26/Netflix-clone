import axios from "../libs/axios";
import requests from "../libs/request";
export const getFetchTrending=async()=>{
    try{
        const {data}=await axios.get(requests.fetchTrending)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};

export const getFetchNetflixOriginals=async()=>{
    try{
        const {data}=await axios.get(requests.fetchNetflixOriginals)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchTopRated=async()=>{
    try{
        const {data}=await axios.get(requests.fetchTopRated)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchActionMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchActionMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchComedyMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchComedyMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchHorrorMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchHorrorMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchRomanceMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchRomanceMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchAdventureMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchAdventureMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchWarMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchWarMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchScienceFictionMovies=async()=>{
    try{
        const {data}=await axios.get(requests.fetchScienceFictionMovies)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getFetchDocumentaries=async()=>{
    try{
        const {data}=await axios.get(requests.fetchDocumentaries)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getSearchUrl=async()=>{
    try{
        const {data}=await axios.get(requests.searchUrl)
        console.log(data);
        
        return data;
    } catch (error){
        alert(JSON.stringify(error));
        return null;
    };
};
export const getPageData=async()=>{
    const trendingNow=await getFetchTrending();
    const netflixOriginals=await getFetchNetflixOriginals();
    const topRated=await getFetchTopRated();
    const actionMovies=await getFetchActionMovies();
    const comedyMovies=await getFetchComedyMovies();
    const romanceMovies=await getFetchHorrorMovies();
    const adventureMovies=await getFetchAdventureMovies();
    const warMovies=await getFetchWarMovies();
    const scienceFictionMovies=await getFetchScienceFictionMovies();
    const documentaries=await getFetchDocumentaries()


}
return(
    trendingNow,
    netflixoriginals,
    topRated,
    actionMovies,
    comedyMovies,
    romanceMovies,
    adventureMovies,
    warMovies,
    scienceFictionMovies,
    documentaries
)