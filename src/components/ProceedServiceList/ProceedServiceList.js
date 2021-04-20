import React from 'react';

const ProceedServiceList = ({proceed}) => {
   

    return (
        <div> 
            <table class="table">
        
        <tbody>
          <tr>
            <td>{proceed.name}</td>
            <td>{proceed.price} $</td>
            <td><img style={{height:'50px'}} src={proceed.imageUrl} alt=""/></td>
            
            <td>{(new Date(proceed.orderTime).toDateString('dd/MM/yyyy'))} </td>
          </tr>
        </tbody>
      </table>
            
   
        </div>
    );
};

export default ProceedServiceList;