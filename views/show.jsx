const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    console.log(bread.name) //TODO: Remove before production

    return(
        <Default>
            <p>Voilà our lovely </p>
            <h3>{bread.name}</h3>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />›
            </form>
            <p>
                bread, which {
                    <bread className="hasGluten">
                        ? <span>does </span>
                        : <span>doesn't </span>
                    </bread>
                    contain gluten.
                }
            </p>
            <img src={bread.image} alt={bread.name} />
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <li><button><a href={`/breads/${index}/edit`}>Edit Bread</a></button></li>
            <li>
            <a href="/breads"><button>Return to the Bread Shop</button></a>
            </li>
            <img
        </Default>
    )
}

module.exports = Show