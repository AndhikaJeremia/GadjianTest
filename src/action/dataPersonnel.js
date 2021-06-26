import axios from 'axios'

export const getAllDataPersonel = () => {
    return async(dispatch)=>{
        try{
            const res = await axios.get('https://randomuser.me/api/?results=28')
            let data = res.data.results
            localStorage.setItem('AllPersonel', JSON.stringify(data))
            dispatch({
                type:'ALL_PERSONEL',
                payload: data
            })
        }   
        catch(err){
            console.log(err, 'err getAllDataPersonel')
        }
    }
}

export const getPersonelDataPage = (pageNumber) => {
    return async(dispatch) => {
        try{
            let page_size = 4
            let data = localStorage.getItem('AllPersonel')
            data = JSON.parse(data)

            let dataPaginate = paginate(data, parseInt(page_size), parseInt(pageNumber))
            dispatch({
                type: 'PAGINATE_DATA',
                payload: dataPaginate
            })

            function paginate(array, page_size, page_number) {
                return array.slice((page_number - 1) * page_size, page_number * page_size);
            }
            
            
        }
        catch(err){
            console.log(err, 'err getPersonelDataPage')
        }
    }
}

export const getNextPersonelDataPage = (pageNumber) => {
    return async(dispatch) => {
        try{
            let page_size = 4
            let data = localStorage.getItem('AllPersonel')
            data = JSON.parse(data)

            let dataPaginate = paginate(data, parseInt(page_size), parseInt(pageNumber + 1))
            dispatch({
                type: 'NEXT_PAGINATE_DATA',
                payload: dataPaginate
            })

            function paginate(array, page_size, page_number) {
                return array.slice((page_number - 1) * page_size, page_number * page_size);
            }
            
            
        }
        catch(err){
            console.log(err, 'err getPersonelDataPage')
        }
    }
}