import axiosInstance from "@/api/axiosInstacn"




export const RegistarUser = async (data) => {



    try {
        const response = await axiosInstance.post('/api/users/register', {
            ...data,
            role : "user"
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  RegistarUser")

            alert(error.response.data.message)
    }
}






export const LoginUser = async (data) => {
    try {
        const response = await axiosInstance.post('/api/users/login', data)
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  LoginUser")
            alert(error.response.data.message)
    }
}



// profile



export const ProfileUser = async () => {
    try {
        const response = await axiosInstance.get('/api/users/profile')
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  ProfileUser")
            alert(error.response.data.message)
    }
}



export const fileUpload = async (formdata , onProgressCallback) => {
    try {
        const {data} = await axiosInstance.post('/api/upload/upload', formdata ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },

            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
                );
                onProgressCallback(percentCompleted);
                console.log(percentCompleted , "percentCompleted")
            },
       
            
        
            
        })

       
        return data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  fileUpload")
            alert(error.response.data.message)
    }
}





'/api/Book/addbook'



export const AddBookFromServicess = async (data) => {
    try {
        const response = await axiosInstance.post('/api/Book/addbook', data)
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  AddBook")
            alert(error.response.data.message)
    }
}







export const AllBookFromServicess = async () => {
    

        const {data} = await axiosInstance.get("/api/Book/allbook")
    
        return data
    
    
   
}


// get single book


export const SingleBookFromServicess = async (id) => {
    try {
        const {data} = await axiosInstance.get(`/api/Book/getSingleBook/${id}`)
        return data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  SingleBook")
            
    }
}



// update book


export const UpdateBookFromServicess = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/api/Book/updatedBook/${id}`, data)
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  UpdateBook")
            alert(error.response.data.message)
    }
}


export const DeleteBookFromServicess = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/Book/deleteBook/${id}`)
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  DeleteBook")
            alert(error.response.data.message)
    }
}





// filterbook


export const FilterBookFromServicess = async (query) => {
    try {
        const response = await axiosInstance.get(`/api/Book/filterbook?${query}`)
        return response.data
    } catch (error) {
        console.log(error.response.data.message
            , "servicess from Functoon  FilterBook")
            alert(error.response.data.message)
    }
}