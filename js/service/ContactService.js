class ContactService{
    static url=" http://localhost:3000/contacts";

    static async addContactDetails(contact)
    {
        //post API--to insert record
       return await axios.post(this.url,contact);
    }

    static async getContactDetails()
    {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
}
export default ContactService;