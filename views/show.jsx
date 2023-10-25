// const React = require('react')
// const Default = require('./layouts/Default')

// function Show ({bread,index}) {
//   // confirm we are getting our bread data in terminal
//   // console.log(bread.name)
//     return (
//       <Default>
//         <h3>{bread.name}</h3>
//         <p>
//           and it
//           {
//             bread.hasGluten
//             ? <span> does </span>
//             : <span> does NOT </span>
//           }
//           have gluten.
//         </p>
//         <img src={bread.image} alt={bread.name} />
//         <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
//         <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
//           <input type='submit' value="DELETE"/>
//         </form>

//         <li><a href="/breads">Go home</a></li>
//       </Default>
//     )
// }

// module.exports = Show


import React from 'react';
import Default from './layouts/default';

function Show({ bread, index }) {
    console.log(bread.name); //TODO: Remove before production

    return (
        <Default>
            <p>Voilà our lovely </p>
            <h3>{bread.name}</h3>
            <p>
                bread, which 
                { bread.hasGluten
                        ? <span> does </span>
                        : <span> doesn't </span>
                }
                contain gluten.
            </p>
            {/* <img src={bread.image} alt={bread.name} />
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <ul>
                <li><button><a href={`/breads/${index}/edit`}>Edit Bread</a></button></li>
                <li>
                    <a href="/breads"><button>Return to the Bread Shop</button></a>
                </li>
            </ul>
        </Default>
    );
}

export default Show; */}
            <img src={bread.image} alt={bread.name} />
            <p> Baked by {bread.baker} </p>

<a href={`/breads`}><button>Return to the Bread Shop</button></a>
<a href={`/breads/${bread.id}/edit`}><button>Update Bread Profile</button></a>
<form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
<input type='submit' value="DELETE"/>
</form>

</Default>

    )
}

module.exports = Show