class Contact{
    set name(name)
    {
        this._name=name;
    }
    set email(email)
    {
        this._email=email;
    }
    set subject(subject)
    {
        this._address=address;
    }
    set message(message)
    {
        this._message=message;
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
    get subject(){
        return this._subject;
    }
    get email()
    {
        return this._email;
    }
    get message()
    {
        return this.message;
    }
}

export default Contact;