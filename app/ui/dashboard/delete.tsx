import {deleteAuthor,deleteCategory,deleteTag,deleteNews,deleteQuestion} from '@/app/lib/actions';
import { IoTrashBinOutline } from "react-icons/io5";

const Delete = ({id,pathName}:{id:string,pathName?:string}) => {
  console.log(`PathName Got: ${pathName}`);
  let deleteData;
  switch (pathName) {
    case '/dashboard/news':
      deleteData = deleteNews.bind(null,id);  
      break;
    case '/dashboard/authors':
      deleteData = deleteAuthor.bind(null,id);  
      break;
    case '/dashboard/categories':
      deleteData = deleteCategory.bind(null,id);  
      break;
    case '/dashboard/tags':
      deleteData = deleteTag.bind(null,id);  
      break;
    case '/dashboard/questions':
      deleteData = deleteQuestion.bind(null,id);  
      break;
  }
  //const deleteData = deleteAuthor.bind(null,id);
  return (
    <form action={deleteData}>
      <button  type="submit" className='cursor-pointer rounded-md border border-[#4879D8] p-1'>
        <IoTrashBinOutline size={24} color="#D62924"/>
      </button>
    </form>
  )
}

export default Delete