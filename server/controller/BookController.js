import BookModel from "../models/BookModel.js";



export const AddBook = async (req, res) => {


    try {
        const book = new BookModel(req.body);
        await book.save();
        res.status(201).json({
            message: "Book added successfully",
            success : true,
            data : book
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}




// get all book


export const getAllBook = async (req, res) => {
    try {
        const book = await BookModel.find({});
        res.status(200).json({
            message: "All Book",
            success : true,
            data : book
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


// single book

export const getSingleBook = async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id);
        res.status(200).json({
            message: "Single Book",
            success : true,
            data : book
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


//  update book




export const updatedBook =  async (req, res) => {
    try {
       
  

        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            message: "Book updated successfully",
            success : true,
            data : book
        });

    }catch (error) {
        res.status(500).json({ error: error });
    }
}



//  delete book

export const deleteBook  =  async(req, res) => {

    try {
        const book = await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Book deleted successfully",
            success : true,
            data : book
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }

}








//  filter by category and language and level



export const filterBook = async (req, res) => {
    try {

        const {
      
            category = [],
            level = [],
             language = [],
             sortBy = "price-lowtohigh",
           } = req.query;
       

           console.log(req.query, "req.query");


      

       



    let filters = {};
    if (category.length) {
      filters.category = { $in: category.split(",") };
    }
    if (level.length) {
      filters.level = { $in: level.split(",") };
    }

    if(language.length ){
      filters.language = { $in : language.split(",")}
    }



                let sortParam = {};

                switch (sortBy) {
                    case "price-lowtohigh":
                        sortParam.price = 1;
                        break;
                    case "price-hightolow":
                        sortParam.price = -1;
                        break;
                        case "title-atoz":
                        sortParam.title = 1;
                        break;
                        case "title-ztoa":
                            sortParam.title = -1;

                    default:
                        sortParam.price = 1;
                        break;
                }




                const coursesList = await BookModel.find(filters).sort(sortParam);



            res.status(200).json({ success: true, data: coursesList, message: "Courses found" });

               



    } catch(e){
        console.log(e)
    }
}