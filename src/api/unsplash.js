import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID EFQHtt_VuWz1A3jyn77pQd9n8lfojJAvqStbzmqEgVE"
      }
})