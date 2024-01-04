class Feedback{
    set name(name)
    {
        this._name=name;
    }
    set email(email)
    {
        this._email=email;
    }
    set phone(phone)
    {
        this._phone=phone;
    }
    set booking(booking)
    {
        this._booking=booking;
    }
    set comments(comments)
    {
        this._comments=comments;
    }
    set id(id)
    {
        this._id=id;
    }
    get name()
    {
        return this._name;
    }
    get id()
    {
        return this._id;
    }
    
    get email()
    {
        return this._email;
    }
    get phone()
    {
            return this._phone;
    }
    get booking()
    {
        return this._booking;
    }
    get comments()
    {
        return this._comments;
    }
   
}

export default Feedback;