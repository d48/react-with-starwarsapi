const fetchAPI = (url, processData, processError) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw Error("API URL not found")
        } else {
          throw Error("Malformed API")
        }
      }

      return response.json()
    })
    .then(processData)
    .catch(processError)
}

export default fetchAPI
