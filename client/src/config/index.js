
export const SignUpFormControl = [



    {
        name : "name",
        label : "Name",
        type : "text",
        placeholder : 'Enter Your Name',
        componentType : "input"
    },


    {
        name : "email",
        label : "Email",
        type : "email",
        placeholder : 'Enter Your Email',
        componentType : "input"
    },

    {
        name : "password",
        label : "Password",
        type : "password",
        placeholder : 'Enter Your Password',
        componentType : "input"
    },
    
        {
            name : "thumbnail",
            label : "Thumbnail",
            type : "file",
            placeholder : 'Enter Your Thumbnail',
            componentType : "input"
        }

    





]



export const SignInFormControl = [

    {
        name : "email",
        label : "Email",
        type : "email",
        placeholder : 'Enter Your Email',
        componentType : "input"
    },

    {
        name : "password",
        label : "Password",
        type : "password",
        placeholder : 'Enter Your Password',
        componentType : "input"
    }
]







export const SignUpFromData  = {
    name : "",
    email : "",
    password : "",
    thumbnail : ""
}


export const SignInFromData  = {
    email : "",
    password : ""

}






export const CategoryBook = [
    { id: "drama", label: "Drama" },
    { id: "fiction", label: "Fiction" },
    { id: "horror", label: "Horror" },
    { id: "mystery", label: "Mystery" },
    { id: "non-fiction", label: "Non-Fiction" },
    { id: "romance", label: "Romance" },
    { id: "science-fiction", label: "Science Fiction" },
    { id: "thriller", label: "Thriller" },
]


export const LanguageBook = [
    { id: "english", label: "English" },
    { id: "french", label: "French" },
    { id: "german", label: "German" },
    { id: "italian", label: "Italian" },
    { id: "spanish", label: "Spanish" }
]


export const  BookLevel = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" }
]


// Book Form Data

export const filterOption  = {
    category : CategoryBook,
    language : LanguageBook,
    level : BookLevel
}


export const sortOption = [
    {id : "price-lowtohigh", label : "Price: Low to High"},
    {id : "price-hightolow", label : "Price: High to Low"},
    {id : "title-atoz", label : "Title: A to Z"},
    {id : "title-ztoa", label : "Title: Z to A"},
]



export const LandinPageFormControl = [
    {
        name : "title",
        label : "Title",
        type : "text",
        placeholder : 'Enter Book Title',
        componentType : "input"
    },

    {
        name : "price",
        label : "Price",
        type : "number",
        placeholder : 'Enter Book Price',
        componentType : "input"
    },

  

    {
        name : "description",
        label : "Description",
        type : "text",
        placeholder : 'Enter Book Description',
        componentType : "textarea"
    },

    {
        name : "category",
        label : "category",
        type : "select",
        placeholder : 'Select Book Category',
        componentType : "select",
        options : CategoryBook

    }, 
    {
        name : "language",
        label : "Language",
        type : "select",
        placeholder : 'Select Book Language',
        componentType : "select",
        options : LanguageBook

    }, 
    {
        name : "level",
        label : "Level",
        type : "select",
        placeholder : 'Select Book Level',
        componentType : "select",
        options : BookLevel

    },
    {
        name: "objectives",
        label: "Objectives",
        componentType: "textarea",
        type: "text",
        placeholder: "Enter course objectives",
      },
      {
        name: "welcomeMessage",
        label: "Welcome Message",
        componentType: "textarea",
        placeholder: "Welcome message for students",
      },

      {
        name : "subtitle",
        label : "subtitle",
        type : "text",
        placeholder : 'Enter Book subtitle',
        componentType : "input"
      }
    
]



export const LandinPageFormData = {
    title : "",
    subtitle : "",
    price : "",
    description : "",
    category : "",
    language : "",
    level : "",
    objectives : "",
    welcomeMessage : "",
    image: "", 
}



export const BookVedicData = 
[
    {
        title  : "",
        videoUrl : "",
        publicId : "",
    
        
    }
]
