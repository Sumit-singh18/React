import React from 'react'
const Filter=()=>{
const Data =[{name:'Sumit',Roll: 590, State:'punjab'},
{name:'Brock',Roll: 5923, State:'Haryana'},
{name:'JOhn',Roll: 5943, State:'Haryana'},
{name:'Rahul',Roll: 5912, State:'punjab'},
];
const filterdata = Data.filter((Obj)=>{
    if(Obj.State === 'punjab'){
        return true
    }else return false;

})
return <div>
        {
            filterdata.map((Obj)=>{
                return <h1>{Obj.name}-{Obj.Roll}-{Obj.State}</h1>
            })
        }
    </div>
}
export default  Filter;