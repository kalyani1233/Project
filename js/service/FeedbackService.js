class FeedbackService{
    static url="http://localhost:3000/feedbacks";

    static async addFeedbackDetails(contact)
    {
        //post API--to insert record
       return await axios.post(this.url,contact);
    }

    static async getFeedbackDetails()
    {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
}
export default FeedbackService;