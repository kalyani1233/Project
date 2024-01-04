class SnackService{
    static url="http://localhost:3000/snacks"

    static async getSnackDetails(){
        return await axios.get(this.url);
    }
}

export default SnackService;