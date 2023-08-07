const apiBase = "https://developer.nps.gov/api/v1";
const apiKey = 'zHCXkLcBhMtic9x8KP1DnLAOZGkQsS9S7wSkeXtg';

const getArticlesPath = (limit) => `${apiBase}/articles?limit=${limit}`;
const getParksPath = (limit,start, term) => {
    const queryTerm = term ? `&q=${term}` : "";
    const queryLimit = limit ? `&limit=${limit}`:"";
    const queryStart = start ? `&start=${start}`: "";
    return `${apiBase}/parks?${queryLimit}${queryStart}${queryTerm}`;
}

export{
    apiKey,
    getArticlesPath,
    getParksPath
}