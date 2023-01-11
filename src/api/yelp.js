import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer pxOq96VPFSRf2uFUqYiZ9YAAL9KKHlfM2trMcBdrUJTpREYUTfLJZ-WJJf4artR9jI-eaujfA53wmOh1kEp70hNihnBVMrnzt_cIitLPcMxx4-1VIoFH9xlbW95ZYXYx"
    }
});