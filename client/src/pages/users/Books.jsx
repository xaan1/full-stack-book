import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Label } from '@/components/ui/label'
import { filterOption, sortOption } from '@/config'
import { FilterBookFromServicess } from '@/services'
import { ArrowUpDown, Filter } from 'lucide-react'
import React, { useState ,useEffect} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useNavigate, useSearchParams } from 'react-router-dom'

  function createSearchParamsHelper(filterParams) {
    const queryParams = [];
  
    for (const [key, value] of Object.entries(filterParams)) {
      if (Array.isArray(value) && value.length > 0) {
        const paramValue = value.join(",");
  
        queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
      }
    }
  
    return queryParams.join("&");
  }


const Books = () => {

    const [sort , setSort] = React.useState('price-lowtohigh')
    const [filters, setFilters] = useState({});

    const [searchParams, setSearchParams] = useSearchParams();



    const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);

      // console.log(filters ,"filter")



async function fetchAllCoursesStudentView(filters ,sort) {
  
  const query = new URLSearchParams({
    ...filters,
    sortBy: sort,
  })
          const data = await FilterBookFromServicess(query);
    
          console.log(data.data , "data waaye fetching");
          setStudentViewCoursesList(data.data);
    
          
        }




    function handleFilterOnChange(getSectionId, getCurrentOption) {
      let cpyFilters = { ...filters };
      const indexOfCurrentSeection =
        Object.keys(cpyFilters).indexOf(getSectionId);
  
      console.log(indexOfCurrentSeection, "indexOfCurrentSeection" ,getSectionId ) 
      console.log(getCurrentOption.id ,"getCurrentOption")

      if (indexOfCurrentSeection === -1) {
        cpyFilters = {
          ...cpyFilters,
          [getSectionId]: [getCurrentOption.id],
        };
  
        console.log(cpyFilters);
      } else {
        const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
          getCurrentOption.id
        );
  
        if (indexOfCurrentOption === -1)
          cpyFilters[getSectionId].push(getCurrentOption.id);
        else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
  
      setFilters(cpyFilters);
      sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
    }




  

    useEffect(() => {

      if(filters !== null && sort != null) {
        
    
        fetchAllCoursesStudentView(filters ,sort)

      }
  

  
    },[filters ,sort])


    // console.log(studentViewCoursesList)



    


    console.log(filters, "filter waaaye")



    useEffect(() => {

      const buildQueryStringForFilters = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(buildQueryStringForFilters));

      
    }, [filters]);


useEffect(() => {

  setSort("price-lowtohigh")
  setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});

},[])



const navigate = useNavigate()

    function handleCourseNavigate(courseId) {
      navigate(`movie-details/${courseId}`);

    }

  return (
    <div

    className='container mx-auto p-4'
    >

    <h1 className='text-2xl font-semibold mb-6'>All Books</h1>




    <div className='flex flex-col md:flex-row gap-4'>


   <aside className='w-full md:w-64 space-y-4'>
    

    <div className='py-4'>

        {
            Object.keys(filterOption).map((key, index) => (
          
                <div key={index} className='space-y-4 p-4'>
                
                <h3 className=' font-semibold text-1xl  text-gray-800'>{key.toUpperCase()}</h3>

                    <ul className='space-y-2'>
                        {
                            filterOption[key].map((item, index) => (
                          
                                <Label className="flex font-medium items-center gap-3">

                           
                                <Checkbox  
                                  checked={

                                    filters && filters[key] && filters[key].indexOf(item.id) > -1
                                 }
                                   onCheckedChange={() =>
                                    handleFilterOnChange(key, item)
                                  }

                              
                                
                                
                                />

                                {
                                    item.label
                                }
                               
                               </Label>
                            ))
                        }
                    </ul>
                </div>
            )
       ) }
    </div>

   </aside>



   <main className='flex-1'>


   <div className='flex justify-end items-center mb-4 gap-5'>



{/* sort  */}

    <DropdownMenu>

    <DropdownMenuTrigger asChild 
    >

        <Button 

        className='flex items-center space-x-2 p-2'
        variant='outline'
        
        
        >
            <ArrowUpDown className='w-6 h-6' />
            <span>Sort By</span>
        </Button>
    </DropdownMenuTrigger>
    

    <DropdownMenuContent align="end" className ="w-[200px]">

<DropdownMenuRadioGroup  value={sort} 

onValueChange={(value) => setSort(value)}

>

{
    sortOption.map((option) => (
        <DropdownMenuRadioItem

        value={option.id}
        
        >

            {option.label}
        </DropdownMenuRadioItem>


    ))
}



</DropdownMenuRadioGroup>
    </DropdownMenuContent>
       
   </DropdownMenu>
   

    </div>





    {/* courses */}



    <div className="space-y-4">
            {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
              studentViewCoursesList.map((courseItem) => (
                <Card
                  onClick={() => handleCourseNavigate(courseItem?._id)}
                  className="cursor-pointer"
                  key={courseItem?._id}
                >
                  <CardContent className="flex gap-4 p-4">
                    <div className="w-48 h-32 flex-shrink-0">
                      <img
                        src={courseItem?.image}
                        className="w-ful h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {courseItem?.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-1">
                        Created By{" "}
                        <span className="font-bold">
                          {courseItem?.instructorName}
                        </span>
                      </p>
                      <p className="text-[16px] text-gray-600 mt-3 mb-2">
                        {`${courseItem?.curriculum?.length} ${
                          courseItem?.curriculum?.length <= 1
                            ? "Lecture"
                            : "Lectures"
                        } - ${courseItem?.level.toUpperCase()} Level`}
                      </p>
                      <p className="font-bold text-lg">
                        ${courseItem?.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )
            : (
              <h1 className="font-extrabold text-4xl">No Movies Found</h1>
            )}
          </div>






   </main>

        </div>

    </div>
  )
}

export default Books