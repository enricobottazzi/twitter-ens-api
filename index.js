const axios = require("axios")

let followingENSNames = []

//Twitter handle has to be in the format without '@'
async function getIdFromTwitterHandle (twitterHandle, headers) {
  const url1 = 'https://api.twitter.com/2/users/by'
  let id;

  await axios.get(url1, {
    params: {
        usernames: twitterHandle,
      },
    headers: headers
}).then(
    (response) => {
        id = response.data.data[0].id;
    }
).catch((err) => {console.log(err)})
return id
}

async function fetchENSFollowing (twitterHandle, bearerToken, nextToken) {

const headers = {
  Authorization:  bearerToken }

const id = await getIdFromTwitterHandle(twitterHandle, headers)

const url2 = `https://api.twitter.com/2/users/${id}/following`

await axios.get(url2, {
      params: {
        max_results: 1000,
        pagination_token: nextToken
   },
   headers:headers
  
   }).then(async function (response) {

     const addresses = response.data.data.filter(user => user.name.includes(".eth"));

     const nameArray = addresses.map(user => user.name)

     nameArray.forEach(element => {
         var words = element.split(' ');
         words.forEach(elem=>{
             let extens = elem.split('.');
             if(extens.length == 2){
                 if(extens[1] == "eth"){
                  followingENSNames.push(elem)
                 }
             }
        })
      })

      if (response.data.meta.next_token) {await fetchENSFollowing(twitterHandle, response.data.meta.next_token)}


   }).catch((err) => {console.log(err)})

return followingENSNames

}

module.exports = fetchENSFollowing;